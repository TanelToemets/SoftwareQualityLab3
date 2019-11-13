describe('adding a new page tests', () => {
    context('Functional tests for adding a new page in wordpress admin interface', () => {
        beforeEach(() => {
            cy.visit('https://s1.demo.opensourcecms.com/wordpress/wp-login.php ');
            cy.get('#user_login').clear().type('opensourcecms');
            cy.get('#user_pass').clear().type('opensourcecms');
            cy.get('#wp-submit').click();
            cy.get('#menu-pages > .wp-has-submenu > .wp-menu-name').click();
            cy.get('.page-title-action').click();
            cy.get('.components-popover__content > .components-icon-button > .dashicon > path').click();
            cy.get('#post-title-0').clear().type('new test page'); 
        });

        it('FT13', () => {
            cy.get('.edit-post-header-toolbar > :nth-child(1) > .editor-inserter > .components-button > .dashicon > path').should('be.visible');
        });


        it('FT14', () => {
            cy.get('.edit-post-header-toolbar > :nth-child(1) > .editor-inserter > .components-button > .dashicon > path').click();
            cy.get('.editor-block-types-list').contains('Paragraph').click();
            cy.get('.editor-rich-text > :nth-child(1) > :nth-child(1) > .components-autocomplete').should('be.visible');         
        });

        
        it('FT15', () => {
            cy.get('.edit-post-header-toolbar > :nth-child(1) > .editor-inserter > .components-button > .dashicon > path').click();
            cy.get('.editor-block-types-list').contains('Heading').click();
            cy.get(':nth-child(2) > :nth-child(1) > .components-button > .dashicon').should('be.visible');          
        });

        it('FT16', () => {
            cy.get('.edit-post-header-toolbar > :nth-child(1) > .editor-inserter > .components-button > .dashicon > path').click();
            cy.get('.editor-block-types-list').contains('Gallery').click();
            cy.get('.components-placeholder').contains('Gallery')        
        });

        it('FT17', () => {
            cy.get('.edit-post-header-toolbar > :nth-child(1) > .editor-inserter > .components-button > .dashicon > path').click();
            cy.get('.editor-block-types-list').contains('Image').click();
            cy.get('.components-placeholder').contains('Image');        
        });

        it('FT18', () => {
            cy.get('.edit-post-header-toolbar > :nth-child(1) > .editor-inserter > .components-button > .dashicon > path').click();
            cy.get('.editor-block-types-list').contains('List').click();
            cy.get('.block-editor-rich-text__editable > li').should('be.visible');        
        });

        it('FT19', () => {
            cy.get('.edit-post-header-toolbar > :nth-child(1) > .editor-inserter > .components-button > .dashicon > path').click();
            cy.get('.editor-block-types-list').contains('Quote').click();
            cy.get('.wp-block-quote').should('be.visible');          
        });

        it('FT20', () => {
            cy.get('.edit-post-header-toolbar > :nth-child(1) > .editor-inserter > .components-button > .dashicon > path').click();
            cy.get('.editor-block-types-list').contains('Audio').click();
            cy.get('.components-placeholder').contains('Audio');        
        });

    });
});