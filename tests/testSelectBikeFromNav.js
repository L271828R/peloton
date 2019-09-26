module.exports = {
    'Test that select the bike element from the side Nav Bar'(browser){

        const peloton = browser.page.peloton();

        peloton
            .navigate()
            .selectSideBarNavigation()
            .selectBike();

    }
}