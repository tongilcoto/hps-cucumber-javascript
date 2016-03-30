module.exports = function () {
    this.Around(function (scenario, runScenario) {
        this.actionwords = Object.create(require('./actionwords.js').Actionwords);
        this.actionwords.sut = require('../src/coffee_machine.js').CoffeeMachine();

        runScenario(null, function () {
            this.actionwords = null;
        });
    });


    this.When(/^I start the coffee machine "(.*)"$/, function (lang, callback) {
        this.actionwords.iStartTheCoffeeMachine(lang);
        callback();
    });

    this.When(/^I shutdown the coffee machine$/, function (callback) {
        this.actionwords.iShutdownTheCoffeeMachine();
        callback();
    });

    this.Then(/^message "(.*)" should be displayed$/, function (message, callback) {
        this.actionwords.messageMessageShouldBeDisplayed(message);
        callback();
    });

    this.Then(/^coffee should be served$/, function (callback) {
        this.actionwords.coffeeShouldBeServed();
        callback();
    });

    this.Then(/^coffee should not be served$/, function (callback) {
        this.actionwords.coffeeShouldNotBeServed();
        callback();
    });

    this.When(/^I take a coffee$/, function (callback) {
        this.actionwords.iTakeACoffee();
        callback();
    });

    this.When(/^I empty the coffee grounds$/, function (callback) {
        this.actionwords.iEmptyTheCoffeeGrounds();
        callback();
    });

    this.When(/^I fill the beans tank$/, function (callback) {
        this.actionwords.iFillTheBeansTank();
        callback();
    });

    this.When(/^I fill the water tank$/, function (callback) {
        this.actionwords.iFillTheWaterTank();
        callback();
    });

    this.Given(/^I take "(.*)" coffees$/, function (coffee_number, callback) {
        this.actionwords.iTakeCoffeeNumberCoffees(coffee_number);
        callback();
    });

    this.Given(/^the coffee machine is started$/, function (callback) {
        this.actionwords.theCoffeeMachineIsStarted();
        callback();
    });

    this.Given(/^I handle everything except the water tank$/, function (callback) {
        this.actionwords.iHandleEverythingExceptTheWaterTank();
        callback();
    });

    this.Given(/^I handle water tank$/, function (callback) {
        this.actionwords.iHandleWaterTank();
        callback();
    });

    this.Given(/^I handle beans$/, function (callback) {
        this.actionwords.iHandleBeans();
        callback();
    });

    this.Given(/^I handle coffee grounds$/, function (callback) {
        this.actionwords.iHandleCoffeeGrounds();
        callback();
    });

    this.Given(/^I handle everything except the beans$/, function (callback) {
        this.actionwords.iHandleEverythingExceptTheBeans();
        callback();
    });

    this.Given(/^I handle everything except the grounds$/, function (callback) {
        this.actionwords.iHandleEverythingExceptTheGrounds();
        callback();
    });
}
