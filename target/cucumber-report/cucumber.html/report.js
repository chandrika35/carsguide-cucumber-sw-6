$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I want to check search functionality of website.",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I select make \"\u003cmake\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select model \"\u003cmodel\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select location \"\u003clocation\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select price \"\u003cprice\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 34,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "$30,000"
      ],
      "line": 35,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Kia",
        "Rio",
        "VIC - All",
        "$30,000"
      ],
      "line": 36,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6156389400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I select make \"Audi\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select model \"A3\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select location \"NSW - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select price \"$30,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 148020500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 718448300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1755503800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 87921700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 137925900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 174256200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 102213700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 113166500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 1741487100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 56939600,
  "status": "passed"
});
formatter.after({
  "duration": 859032900,
  "status": "passed"
});
formatter.before({
  "duration": 4585394400,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I select make \"Kia\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select model \"Rio\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select location \"VIC - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select price \"$30,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 782765200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1588705900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 55044900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 137894900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rio",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 156687800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 89047600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 104222800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 1946460200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 38393900,
  "status": "passed"
});
formatter.after({
  "duration": 736833100,
  "status": "passed"
});
});