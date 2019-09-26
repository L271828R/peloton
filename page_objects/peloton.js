module.exports = {
    url: 'https://www.onepeloton.com/',
    elements: {
        sideBarNavidation : "button[aria-label='open sidebar navigation']",
        shopBike : "a[data-test-id='navShopBike']"
    },
    commands: [{
        selectSideBarNavigation(){
            const page = this;
            page.click(page.elements.sideBarNavidation);
            return this;
        },
        selectBike(){
            const page = this;
            page.click(page.elements.shopBike);
            return this;
        }
    }]
}

