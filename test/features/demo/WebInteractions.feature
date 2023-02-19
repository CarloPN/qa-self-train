Feature: Web Interactions

    @demo @smoke
    Scenario Outline: Demo Web Interactions
    #Given Google page is opened
    Given A web page is opened
    When Performed web interactions

    Examples:
        | TestID        |
        | WEB_TC002     |
    