module.exports = {
    'My first test case'(browser){

        const peloton = browser.page.peloton();

        peloton
            .navigate()
            .selectSideBarNavigation()
            .selectBike();

    }
}