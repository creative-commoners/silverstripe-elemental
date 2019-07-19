<?php

namespace DNADesign\Elemental\ORM;

use DNADesign\Elemental\Forms\AdjustableTitleField;
use Psr\Log\LoggerInterface;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\ORM\FieldType\DBComposite;
use SilverStripe\View\ArrayData;
use SilverStripe\View\SSViewer;

class DBAdjustableTitle extends DBComposite
{
    private static $composite_db = [
        'Content' => 'Varchar(255)',
        'Template' => 'Varchar(255)',
    ];

    public function getValue()
    {
        return $this->Content;
    }

    public function forTemplate()
    {
        $template = $this->Template;
        $content = $this->getValue();

        // Assume that no content should be rendered if the template is empty
        if (empty($template)) {
            return '';
        }

        // If no template could be found matching, then log it and return the content
        if (!SSViewer::chooseTemplate($template)) {
            Injector::inst()->get(LoggerInterface::class)->debug(sprintf('Could not find template "%s"', $template));
            return $content;
        }

        return ArrayData::create(['Content' => $content])->renderWith($this->Template);
    }

    public function getViewerTemplates($suffix = '')
    {
        $template = $this->Template;

        if (empty($template)) {
            return null;
        }

        if (!SSViewer::chooseTemplate($template)) {
            Injector::inst()->get(LoggerInterface::class)->debug(sprintf('Could not find template "%s"', $template));
            return parent::getViewerTemplates($suffix);
        }

        return $template;
    }

    public function scaffoldFormField($title = null, $params = null)
    {
        $name = $this->getName();

        return AdjustableTitleField::create(
            $name . 'Content',
            $name . 'Template',
            null,
            $title
        )->setName($name);
    }

    public function __toString()
    {
        return $this->XML();
    }
}
