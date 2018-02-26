<?php

namespace DNADesign\Elemental\Tests\Extensions;

use DNADesign\Elemental\Extensions\ElementalPageExtension;
use DNADesign\Elemental\Extensions\ElementRelationDenormalisationExtension;
use DNADesign\Elemental\Models\ElementContent;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Dev\SapphireTest;

class ElementRelationDenormalisationExtensionTest extends SapphireTest
{
    protected static $fixture_file = 'ElementRelationDenormalisationExtensionTest.yml';

    protected static $required_extensions = [
        SiteTree::class => [
            ElementRelationDenormalisationExtension::class,
            ElementalPageExtension::class,
        ]
    ];

    public function testSavingPageSetsFlattenedElementIds()
    {
        /** @var SiteTree $page */
        $page = $this->objFromFixture(SiteTree::class, 'page_1');

        /** @var ElementContent $element1 */
        $element1 = $this->objFromFixture(ElementContent::class, 'page_1_content_1');
        $element2 = $this->objFromFixture(ElementContent::class, 'page_1_content_2');

        $result = $page->FlattenedElements()->getIDList();
        $this->assertNotEmpty($result);
        $this->assertContains($element1->ID, $result, 'Denormalised list contents element ID from one level');
        $this->assertContains($element2->ID, $result, 'Denormalised list contents element ID from one level');
    }
}
