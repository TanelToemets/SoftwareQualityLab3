describe('adding a new page tests', () => {
    context('Functional tests for adding a new page in wordpress admin interface', () => {
        beforeEach(() => {
            cy.visit('https://s1.demo.opensourcecms.com/wordpress/wp-login.php ');
            cy.get('#user_login').clear().type('opensourcecms');
            cy.get('#user_pass').clear().type('opensourcecms');
            cy.get('#wp-submit').click();
        });

        it('FT06', () => {
            cy.get('#menu-pages > .wp-has-submenu > .wp-menu-name').click();
            cy.url().should('eq', 'https://s1.demo.opensourcecms.com/wordpress/wp-admin/edit.php?post_type=page');
        });

        it('FT07', () => {
            cy.get('#menu-pages > .wp-has-submenu > .wp-menu-name').click();
            //cy.wait(3000)
            cy.get('.page-title-action').click();
            cy.url().should('eq', 'https://s1.demo.opensourcecms.com/wordpress/wp-admin/post-new.php?post_type=page');
        });


        it('FT08', () => {
            cy.get('#menu-pages > .wp-has-submenu > .wp-menu-name').click();
            cy.get('.page-title-action').click();
            cy.get('.editor-post-publish-panel__toggle').click();
            cy.url().should('eq', 'https://s1.demo.opensourcecms.com/wordpress/wp-admin/post-new.php?post_type=page');
        });

        it('FT09', () => {
            cy.get('#menu-pages > .wp-has-submenu > .wp-menu-name').click();
            cy.get('.page-title-action').click();
            cy.get('.components-popover__content > .components-icon-button > .dashicon > path').click();
            cy.get('#post-title-0').clear().type('new test page'); 
            cy.get('.editor-post-publish-panel__toggle').click();
            cy.get(':nth-child(1) > strong').contains('Are you ready to publish?');
            cy.get('.editor-post-publish-panel__prepublish > p').contains('Double-check your settings before publishing.');
        });

        it('FT10', () => {
            cy.get('#menu-pages > .wp-has-submenu > .wp-menu-name').click();
            cy.get('.page-title-action').click();
            cy.get('.components-popover__content > .components-icon-button > .dashicon > path').click();
            cy.get('#post-title-0').clear().type('new test page'); 
            cy.get('.editor-post-publish-panel__toggle').click();
            cy.get('.editor-post-publish-panel__header-publish-button > .components-button').click();
            cy.get('.components-notice').contains('Page published');
        });

        it('FT11', () => {
            cy.get('#menu-pages > .wp-has-submenu > .wp-menu-name').click();
            cy.get('.page-title-action').click();
            cy.get('.components-popover__content > .components-icon-button > .dashicon > path').click();
            cy.get('#post-title-0').clear().type('new test page'); 
            cy.get('.editor-post-publish-panel__toggle').click();
            cy.get('.editor-post-publish-panel__header-publish-button > .components-button').click();
            cy.get('.components-notice__content > .components-button').click();
            cy.url().should('contains', 'https://s1.demo.opensourcecms.com/wordpress/new-test-page');
        });

    });
});