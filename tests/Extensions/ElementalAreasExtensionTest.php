<?php

namespace DNADesign\Elemental\Tests\Extensions;

use DNADesign\Elemental\Extensions\ElementalAreasExtension;
use DNADesign\Elemental\Tests\Extensions\Stub\ElementalObject;
use SilverStripe\Dev\SapphireTest;
use SilverStripe\Versioned\Versioned;

class ElementalAreasExtensionTest extends SapphireTest
{
    protected static $fixture_file = 'ElementalAreasExtensionTest.yml';

    protected static $extra_dataobjects = [
        ElementalObject::class,
    ];

    protected static $required_extensions = [
        ElementalObject::class => [
            ElementalAreasExtension::class,
            Versioned::class,
        ],
    ];

    public function testElementalAreasAreAutomaticallyAddedToObjectsOnWrite()
    {
        /** @var ElementalObject $object */
        $object = $this->objFromFixture(ElementalObject::class, 'object_a');

        $this->assertNotNull($object->ElementalArea());
        $this->assertTrue($object->ElementalArea()->exists());
    }

    public function testAssociatedElementalAreaIsSameAfterObjectIsArchived()
    {
        /** @var ElementalObject|Versioned $object */
        $object = $this->objFromFixture(ElementalObject::class, 'object_a');
        $originalAreaId = $object->ElementalArea()->ID;
        $object->doArchive();

        $this->assertTrue($object->exists());
        $this->assertNotNull($object->ElementalArea());
        $this->assertTrue($object->ElementalArea()->exists());
        $this->assertEquals($originalAreaId, $object->ElementalArea()->ID);
    }

    public function testViewingCmsFieldsForArchivedObjectDoesntRecreateElementalArea()
    {
        /** @var ElementalObject|Versioned $object */
        $object = $this->objFromFixture(ElementalObject::class, 'object_a');
        $originalAreaId = $object->ElementalArea()->ID;
        $object->doArchive();
        $object->getCMSFields();

        $this->assertNotNull($object->ElementalArea());
        $this->assertTrue($object->ElementalArea()->exists());
        $this->assertEquals($originalAreaId, $object->ElementalArea()->ID);
    }
}
