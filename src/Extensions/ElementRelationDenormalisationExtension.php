<?php

namespace DNADesign\Elemental\Extensions;

use DNADesign\Elemental\Models\BaseElement;
use DNADesign\Elemental\Models\SiteTreeElement;
use SilverStripe\ORM\DataExtension;

/**
 * This extension is used to store a versioned and denormalised (flat) list of the nested element IDs that
 * belong to this page. It is applied to the SiteTree class to ensure that all pages will have the methods
 * required to execute the logic, regardless of whether they have the {@link ElementalPageExtension}.
 *
 * This helps us to perform nested searches for content block data in the context of a page, e.g. in the
 * CMS search.
 */
class ElementRelationDenormalisationExtension extends DataExtension
{
    private static $many_many = [
        'FlattenedElements' => [
            'through' => SiteTreeElement::class,
            'from' => 'SiteTree',
            'to' => 'Element',
        ],
    ];

    private static $owns = ['FlattenedElements'];

    private static $cascade_deletes = ['FlattenedElements'];

    /**
     * Write the list of collated element IDs to the many_many
     */
    public function onBeforeWrite()
    {
        $flattenedElementIds = $this->getFlattenedElementIds();
        $this->owner->FlattenedElements()->setByIDList($flattenedElementIds);
    }

    /**
     * Get a list of the associated element IDs. Currently works at one level of depth, although an extension
     * point is provided to let users implement logic that suits their data structure.
     *
     * @todo automatically support arbitrary depths via relation lookups on BaseElement classes
     *
     * @return int[]
     */
    protected function getFlattenedElementIds()
    {
        $elementIds = [];
        if (!$this->owner->hasExtension(ElementalPageExtension::class)) {
            return $elementIds;
        }

        foreach ($this->owner->ElementalArea()->Elements() as $element) {
            /** @var BaseElement $element */
            $elementIds[] = $element->ID;
        }

        $this->owner->extend('updateFlattenedElementIds', $elementIds);

        return $elementIds;
    }
}
