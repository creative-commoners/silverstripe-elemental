<?php

namespace DNADesign\Elemental\Tests\Extensions\Stub;

use DNADesign\Elemental\Models\ElementalArea;
use SilverStripe\Dev\TestOnly;
use SilverStripe\ORM\DataObject;

/**
 * Apply the ElementalAreasExtension in $required_extensions for your unit test class
 */
class ElementalObject extends DataObject implements TestOnly
{
    private static $table_name = 'Stub_ElementalObject';

    private static $db = [
        'Title' => 'Varchar',
    ];

    private static $has_one = [
        'ElementalArea' => ElementalArea::class,
    ];

    private static $owns = [
        'ElementalArea',
    ];

    private static $cascade_duplicates = [
        'ElementalArea',
    ];
}
