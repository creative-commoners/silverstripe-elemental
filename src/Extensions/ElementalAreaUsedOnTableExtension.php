<?php

namespace DNADesign\Elemental\Extensions;

use SilverStripe\Admin\Forms\UsedOnTable;
use SilverStripe\Core\ClassInfo;
use SilverStripe\ORM\DataExtension;
use SilverStripe\ORM\ArrayList;
use SilverStripe\ORM\DataObject;
use DNADesign\Elemental\Models\ElementalArea;
use DNADesign\Elemental\Models\BaseElement;

class ElementalAreaUsedOnTableExtension extends DataExtension
{
    /**
     * Hides ElementalArea's from the "Used On" tab when viewing files
     *
     * @return void
     * @var ArrayList $dataObjects
     * @var DataObject $record
     * @see UsedOnTable::updateUsage
     */
    public function updateUsage(ArrayList &$dataObjects, DataObject &$record)
    {
        $dataObjects = $dataObjects->exclude('ClassName', ElementalArea::class);
    }

    /**
     * Link BaseElement's to their parent page
     *
     * @param array $arr
     * @param DataObject $dataObject
     * @throws \ReflectionException
     */
    public function updateUsageArray(array &$arr, DataObject $dataObject)
    {
        $subClasses = ClassInfo::subclassesFor(BaseElement::class);
        if (!in_array(get_class($dataObject), $subClasses)) {
            return;
        }
        if ($page = $dataObject->getPage()) {
            $arr['ancestorPageID'] = $page->ID;
        }
    }
}
