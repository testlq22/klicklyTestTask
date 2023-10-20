import klicklyPage from "./pages/klickly.page"



describe('Few tests for Klickly', () => {
 beforeEach(()=>{
   cy.viewport(1280, 720)
   cy.visit('https://giftly.klickly-dev.com/marketplace')
   
 })

 it('Сheck search field', () => { 
    cy.get(klicklyPage.getSearchField()).click()
    cy.get(klicklyPage.getSearchField()).type(klicklyPage.productToSearch1()) 
    cy.get(klicklyPage.getSearchButton()).click()  
    cy.get(klicklyPage.productSearch1Result()).should('be.visible')
    cy.get(klicklyPage.productSearch1Result()).click()
    cy.get(klicklyPage.product1Page()).should('be.visible')

    
  })

  it('Сheck search for Star Wars', () => { 
    cy.get(klicklyPage.getSearchField()).click()
    cy.get(klicklyPage.getSearchField()).type(klicklyPage.productToSearch2()) 
    cy.get(klicklyPage.getSearchButton()).click()  
    cy.get(klicklyPage.productSearch2Result()).should('have.length', 24)
    cy.get(klicklyPage.productSearch2Result()).should('include.text', 'STAR WARS')
    cy.get(klicklyPage.productSearch2Result()).then(($res) => {
    expect($res).to.contain('STAR WARS')
})//return an error message if search results doesnt contain 'STAR WARS'
        
  })

  it('Сheck search for Star Wars', () => { 
    cy.get(klicklyPage.getSearchField()).click()
    cy.get(klicklyPage.getSearchField()).type(klicklyPage.productToSearch2()) 
    cy.get(klicklyPage.getSearchButton()).click()
    cy.get(klicklyPage.productSearch2Result()).should('have.length', 24)  
    cy.get(klicklyPage.getSearchButton()).click()
    cy.get(klicklyPage.productLast()).scrollIntoView()
    cy.get(klicklyPage.productSearch2Result()).should(($lis) => {      
        expect($lis).to.have.length(48)
        expect($lis.eq(24)).not.contain('STAR WARS')
        expect($lis.eq(25)).not.contain('STAR WARS')
        expect($lis.eq(26)).not.contain('STAR WARS')
        expect($lis.eq(27)).not.contain('STAR WARS')
        expect($lis.eq(28)).not.contain('STAR WARS')
        expect($lis.eq(29)).not.contain('STAR WARS')
        expect($lis.eq(30)).not.contain('STAR WARS')
        expect($lis.eq(31)).not.contain('STAR WARS')
        expect($lis.eq(32)).not.contain('STAR WARS')
        expect($lis.eq(33)).not.contain('STAR WARS')
        expect($lis.eq(34)).not.contain('STAR WARS')
        expect($lis.eq(35)).not.contain('STAR WARS')
        expect($lis.eq(36)).not.contain('STAR WARS')
        expect($lis.eq(37)).not.contain('STAR WARS')
        expect($lis.eq(38)).not.contain('STAR WARS')
        expect($lis.eq(39)).not.contain('STAR WARS')
        expect($lis.eq(40)).not.contain('STAR WARS')
        expect($lis.eq(41)).not.contain('STAR WARS')
        expect($lis.eq(42)).not.contain('STAR WARS')
        expect($lis.eq(43)).not.contain('STAR WARS')
        expect($lis.eq(44)).not.contain('STAR WARS')
        expect($lis.eq(45)).not.contain('STAR WARS')
        expect($lis.eq(46)).not.contain('STAR WARS')
        expect($lis.eq(47)).not.contain('STAR WARS')
      })      
        
  })
 
 
})

