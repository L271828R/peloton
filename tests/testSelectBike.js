// module.exports = {
//     'My first test case'(browser){
//         browser 
//         .url('https://www.onepeloton.com/')
//         .waitForElementVisible('button', 3000)
//         .elements('css selector', 'button', function(elements){
//             elements.value.forEach(function(element){
//                 browser.elementIdAttribute(element.ELEMENT, 'aria-label', function(attribute){
//                     if (attribute.value == 'open sidebar navigation'){
//                         browser.elementIdClick(element.ELEMENT);
//                     }
//                 })
//             })
//         })
//         .element('css selector', 'div')
//     }
// }
module.exports = {
    'My first test case'(browser){
        browser 
        .url('https://www.onepeloton.com/')
        .waitForElementVisible('button', 3000)
        .click("button[aria-label='open sidebar navigation']")
        .waitForElementVisible("a[data-test-id='navShopBike']")
        .click("a[data-test-id='navShopBike']")
        .pause(12000);
    }
}