package au.com.carsguide.steps;

import au.com.carsguide.pages.FIndDealerPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class FindDealerSteps {
    @And("^I click ‘Find a Dealer’ link$")
    public void iClickFindADealerLink() throws InterruptedException {
        Thread.sleep(500);
        new FIndDealerPage().clickOnFindADealer();
    }

    @Then("^I see the dealer lists$")
    public void iSeeTheDealerLists(DataTable dataTable) {
        List<String> expectedList = dataTable.asList(String.class);
        for (String data : expectedList) {
            while (new FIndDealerPage().gettingNameOfDealer(data) == null) {
                new FIndDealerPage().clickOnNextButton();
            }
            Assert.assertEquals("Dealer name not found!", data, new FIndDealerPage().gettingNameOfDealer(data));
        }
    }
}
