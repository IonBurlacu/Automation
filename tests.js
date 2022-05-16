

describe ('emag.ro' , () => {
    it('should have the correct page title' , async () => {
    await browser.url('https://emag.ro');
    await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');
    });

    it('should contain a cart' , async () => {
        const cartButton = await $('#my_cart');
        await expect(cartButton).toBeDisplayed();
    });    
    
    it('should open eMag Genius page' , async () => {
     const geniusButton = await $('[title = "eMAG Genius"]');   
     await geniusButton.click(); 
     await expect(browser).toHaveTitle('eMAG genius: serviciul tău premium de cumpărături - eMAG.ro');
    });

    it('should have an working search' , async () => {
     const searchbox = await $('#searchboxTrigger');
     const searchButton = await $('.searchbox-submit-button');
     await searchbox.setValue('Tricou polo');
     await searchButton.click();
    
     await expect(browser).toHaveTitle('Cauți Tricou polo? Alege din oferta eMAG.ro');
    });
});    






    

    
    