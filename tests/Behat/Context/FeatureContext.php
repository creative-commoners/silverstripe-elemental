<?php

namespace DNADesign\Elemental\Tests\Behat\Context;

use Behat\Mink\Element\NodeElement;
use SilverStripe\BehatExtension\Context\SilverStripeContext;

if (!class_exists(SilverStripeContext::class)) {
    return;
}

class FeatureContext extends SilverStripeContext
{
    /**
     * @Then I should see a list of blocks
     */
    public function iShouldSeeAListOfBlocks()
    {
        $this->getBlocks();
    }

    /**
     * Example: I should see "font-icon-block-file" as the "font icon" for block 2
     * Example: I should see "My File Block" as the "title" for block 1
     *
     * @Then /^I should (not |)see :text as the :selector font icon for block :position/
     * @param string $text
     * @param string $position
     */
    public function iShouldSeeIn($text, $position)
    {
        $block = $this->getSpecificBlock($position);

        switch ($text) {
            case 'font icon': {
                $fontIcon = $version->find('css', '.element-editor-header__icon-container .i');
                assertTrue($fontIcon->hasClass($text));
            }
            case 'title': {
                $title = $version->find('css', '.element-editor-header__title');
                assertTrue($title->hasClass($text));
            }
        }
    }

    /**
     * @Then /^I should (not |)see the edit link for block :position/
     * @param string $text
     * @param string $position
     */
    public function iShouldSeeEditLink($text, $position)
    {
        $block = $this->getSpecificBlock($position);

        $editLink = $block->find('css', '.element-editor-header__actions-container .a');
        assertTrue($fontIcon->hasClass($text));
    }

    /**
     * @Then I should see the :text button for block :position
     * @param string $text
     * @param string $position
     */
    public function iShouldSeeButton($text, $position)
    {
        $block = $this->getSpecificBlock($position);
        $button = $block->findNamedButton($text);
        assertNotNull($button, sprintf('%s button not found', $text));
    }

    /**
     * Returns the blocks from the element editor
     *
     * @param string $modifier Optional CSS selector modifier
     * @return NodeElement[]
     */
    protected function getBlocks($modifier = '')
    {
        // Wait for the list to be visible
        $this->getSession()->wait(3000, 'window.jQuery(".element-editor .elemental-editor__list").length > 0');

        $versions = $this->getSession()
            ->getPage()
            ->findAll('css', '.elemental-editor__list .elemental-editor__element' . $modifier);
        return $versions;
    }

    /**
     * Returns the selected element
     *
     * @param int $position
     * @return NodeElement
     */
    protected function getSpecificBlock($position)
    {
        $blocks = $this->getBlocks();
        var_dump($blocks);
            /** @var NodeElement $block */
            if ($blocks[$position - 1] !== false) {
                return $blocks[$position - 1];
            }
    }

    /**
     * @When I hover over block :position
     *
     * @param int $position
     */
    public function iHoverOverBlock($position)
    {
        $block = $this->getSpecificBlock($position);
        assertNotNull($block, 'Block ' . $position . ' was not found in the page.');
        $this->interactWithElement($block, 'hover');
    }

    /**
     * @When I hover over the font icon of block :position
     *
     * @param int $position
     */
    public function iHoverOverTheFontIconOfBlock($position)
    {
        $block = $this->getSpecificBlock($position);
        assertNotNull($block, 'Block ' . $position . ' was not found in the page.');
        $fontIcon = $block->find('css', '.element-editor-header .element-editor-header__info .element-editor-header__icon-container');
        $this->interactWithElement($fontIcon, 'hover');
    }


    /**
     * @Then the block :p should be deleted
     */
    public function theTextShouldBeDeleted($text)
    {
        $result = $this->getSession()->getPage()->find(
            'xpath',
            sprintf('//del[contains(normalize-space(string(.)), \'%s\')]', $text)
        );
        assertNotNull($result, $text . ' was not shown as deleted');
    }
}

