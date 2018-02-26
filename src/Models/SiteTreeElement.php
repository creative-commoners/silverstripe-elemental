<?php

namespace DNADesign\Elemental\Models;

use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\ORM\DataObject;

/**
 * A "through" model for tracking denormalised relationships for SiteTree to BaseElements
 */
class SiteTreeElement extends DataObject
{
    private static $has_one = [
        'SiteTree' => SiteTree::class,
        'Element' => BaseElement::class,
    ];

    private static $table_name = 'BaseElement_SiteTreeElement';
}
