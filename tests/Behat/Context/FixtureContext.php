<?php

namespace DNADesign\Elemental\Tests\Behat\Context;


use DNADesign\Elemental\Models\ElementContent;
use SilverStripe\BehatExtension\Context\FixtureContext as BaseFixtureContext;
use SilverStripe\BehatExtension\Utility\StepHelper;
use SilverStripe\Core\ClassInfo;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\Dev\FixtureBlueprint;

if (!class_exists(BaseFixtureContext::class)) {
    return;
}

/**
 * Context used to create fixtures in the SilverStripe ORM.
 */
class FixtureContext extends BaseFixtureContext
{
    use StepHelper;

    protected function scaffoldDefaultFixtureFactory()
    {
        $factory = parent::scaffoldDefaultFixtureFactory();

        foreach (ClassInfo::subclassesFor(BaseElement::class) as $class) {
            $blueprint = Injector::inst()->create(FixtureBlueprint::class, $class);
            $factory->define($class, $blueprint);
        }

        return $factory;
    }

    /**
     * Create a page containing an ElementalArea and an Element
     * Example: Given a "Blocks Page" page has a "Block Title" content element with "Sample content" content
     *
     * @Given the :pageTitle page has a :elementTitle content element with :elementContent content
     *
     * @param string $pageTitle
     * @param string $elementTitle
     * @param string $elementContent
     */
    public function thePageHasAContentElementWithContent($pageTitle, $elementTitle, $elementContent)
    {
        // Create the page (ElementalArea is created on write and attached to it)
        $targetClass = 'Page';

//        var_dump($this->getFixtureFactory()->get($targetClass, $pageTitle));

        $targetObj = $this->getFixtureFactory()->get($targetClass, $pageTitle);
        if (!$targetObj) {
//            $targetObj = $this->getFixtureFactory()->get($targetClass, $pageTitle);
            $targetObj = $this->getFixtureFactory()->createObject($targetClass, $pageTitle);

        }
        #var_dump($targetObj);

        $areaId = $targetObj->ElementalAreaID;
var_dump($areaId);
        // Create element
        $element = $this->getFixtureFactory()->get(ElementContent::class, $elementTitle);
        $fields = [
            'Content' => $elementContent,
            'ParentID' => $areaId,
        ];
        if ($element) {
            $element->update($fields);
        } else {
            $element = $this->getFixtureFactory()->createObject(ElementContent::class, $elementTitle, $fields);
        }
        $element->write();
    }
}
