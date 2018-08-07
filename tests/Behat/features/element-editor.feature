@javascript
Feature: View types of elements in a report
  As a CMS user
  I want to view a list of elements in the CMS
  So that I can see which elements I have used on a page

  Background:
    Given I have a config file "enable-elemental.yml"
    And I am logged in with "ADMIN" permissions
    And I go to "/dev/build?flush"


    And a "page" "Blocks Page"

    Then I put a breakpoint
    And the "Blocks Page" page has a "Block Title" content element with "Some content." content


#    Given the "elemental area" "Area" is a child of the "page" "BlocksPage"

##    And the "file block" "FileBlock" is a child of the "elemental area" "Area"
#    And the "banner" "BannerBlock" is a child of the "elemental area" "Area"
#    And the "content block" "ContentBlock" is a child of the "elemental area" "Area"


#    And the "elemental area" "Area" has the following data
#    | Content | <blink> |
#    | My Property | foo |
#    | My Boolean | bar |

    Then I put a breakpoint
    And I go to "/admin/pages"
    And I click on "Blocks Page" in the tree
    And I wait for 3 seconds

  Scenario: I can see the font icon, title, and summary of each element
    Then I should see a list of blocks
#    And I should see "font-icon-block-file" as the font icon for block 1
#    And I should see "FileBlock" as the title for block 1
#
#    And I should see "font-icon-block-banner" as the font icon for block 2
#    And I should see "BannerBlock" as the title for block 2

    And I should see "font-icon-block-content" as the font icon for block 1
    And I should see "ContentBlock" as the title for block 1

#  Scenario: I can add elements to the page
#    When I press the "Add block button"

  Scenario: I can see the edit link and delete button when I hover over an element
    When I hover over block 3
    Then I should see the edit link
    And I should see the delete button

  Scenario: I can see the block type when I hover over an element's icon
    When I hover over the font icon of block 1
    Then I should see text matching "Content"

#    When I hover over the font icon of block 1
#    Then I should see text matching "Banner"
#
#    When I hover over the font icon of block 2
#    Then I should see text matching "File"

  Scenario: I reorder the elements on the page

#  Scenario: I edit elements on the page
#    Given I hover over block 2
#    And click the element
#    Then the page url should change to ...
#
#  Scenario: I delete elements on the page
#    Given I click on the "" button
#    Then ...


#    // 1 Make File
#    // 2 Make Content
#    // 3 Make Banner
