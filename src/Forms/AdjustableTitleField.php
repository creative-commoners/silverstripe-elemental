<?php

namespace DNADesign\Elemental\Forms;

use ArrayAccess;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Forms\CompositeField;
use SilverStripe\Forms\DropdownField;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataObjectInterface;
use SilverStripe\View\ArrayData;

class AdjustableTitleField extends CompositeField
{
    use Configurable;

    /**
     * Options as keys linked to the
     *
     * @var array
     */
    protected $optionsToTemplates;

    /**
     * @var TextField
     */
    protected $content;

    /**
     * @var DropdownField
     */
    protected $dropdown;

    /**
     * The name of the field that a boolean for "show title" is stored.
     *
     * @var string|null
     */
    protected $showTitleFieldName = null;

    protected $schemaComponent = 'AdjustableTitleField';

    private static $default_options_to_templates = [
        'Paragraph' => __CLASS__ . '_Paragraph',
        'Header 1' => __CLASS__ . '_H1',
        'Header 2' => __CLASS__ . '_H2',
        'Header 3' => __CLASS__ . '_H3',
        'Header 4' => __CLASS__ . '_H4',
        'Header 5' => __CLASS__ . '_H5',
        'Header 6' => __CLASS__ . '_H6',
    ];

    private static $default_option = null;

    private static $allow_not_displayed = true;

    /**
     * AdjustableTitleField constructor.
     * @param string $name
     * @param string|null $showTitleName
     * @param string|null $title
     * @param array|ArrayAccess|null $optionsToTemplates
     */
    public function __construct(
        $titleFieldName,
        $templateFieldName,
        $showTitleFieldName = null,
        $title = null,
        $optionsToTemplates = null
    ) {
        // Create the fields for this composite
        $fields = [
            $this->content = TextField::create($titleFieldName),
            /** @var DropdownField $dropdown */
            $this->dropdown = DropdownField::create($templateFieldName)
        ];
        parent::__construct($fields);

        if ($showTitleFieldName) {
            $this->showTitleFieldName = $showTitleFieldName;
        }

        // Set the title falling back to a sensible default
        if (!$title) {
            $title = _t(__CLASS__ . '.TitleLabel', 'Title');
        }
        $this->setTitle($title);

        // Set override options if provided
        if ($optionsToTemplates === null) {
            $this->setOptionsToTemplates($this->config()->get('default_options_to_templates'));
        }

        $this->addShowTitleOption();

        $this->addExtraClass('adjustable-title-field');
    }

    /**
     * @return array
     */
    public function getOptionsToTemplates()
    {
        return $this->optionsToTemplates;
    }

    /**
     * @param array $optionsToTemplates
     * @return AdjustableTitleField
     */
    public function setOptionsToTemplates($optionsToTemplates)
    {
        $this->optionsToTemplates = $optionsToTemplates;

        // Compile the source of the selector
        $this->dropdown->setSource(array_flip($optionsToTemplates));
        $this->addShowTitleOption();

        return $this;
    }

    /**
     * @param string|null $showTitleFieldName
     * @return AdjustableTitleField
     */
    public function setShowTitleFieldName($showTitleFieldName)
    {
        $this->showTitleFieldName = $showTitleFieldName;
        return $this;
    }

    /**
     * @return $this
     */
    protected function addShowTitleOption()
    {
        if (!$this->config()->get('allow_not_displayed')) {
            return $this;
        }

        $options = $this->dropdown->getSource();
        $options[''] = _t(
            __CLASS__ . '.DO_NOT_DISPLAY_TITLE',
            'Do not display title'
        );
        $this->dropdown->setSource($options);

        $default = $this->config()->get('default_option');
        if (empty($default)) {
            $this->dropdown->setValue('');
        } else {
            $this->dropdown->setValue($default);
        }

        return $this;
    }

    public function saveInto(DataObjectInterface $record)
    {
        // Set the "show title" field if provided
        if ($field = $this->showTitleFieldName) {
            // If the value is "empty" then they've specified `ShowTitle = false`
            $record->setCastedField(
                $field,
                $this->config()->get('allow_not_displayed') ? !empty($this->dropdown->Value()) : true
            );
        }
    }

    public function hasData()
    {
        return true;
    }

    public function getSchemaDataDefaults()
    {
        $schema = parent::getSchemaDataDefaults();

        // Remove information about children - this children of this composite are known
        unset($schema['children']);
        // We will add in the schema of those tow fields with named keys
        $schema['contentField'] = $this->content->getSchemaData();
        $schema['templateField'] = $this->dropdown->getSchemaData();

        return $schema;
    }

    public function getSchemaStateDefaults()
    {
        $state = parent::getSchemaStateDefaults();

        $state['contentField'] = $this->content->getSchemaState();
        $state['templateField'] = $this->dropdown->getSchemaState();

        // Alter the source of the template field to render the options with their templates
        $state['templateField']['source'] = array_map(function($sourceItem) {

            if (!empty($sourceItem['value'])) {
                $sourceItem['title'] = (string) ArrayData::create(['Content' => $sourceItem['title']])
                    ->renderWith($sourceItem['value']);
            }

            return $sourceItem;
        }, $state['templateField']['source']);

        return $state;
    }


}
