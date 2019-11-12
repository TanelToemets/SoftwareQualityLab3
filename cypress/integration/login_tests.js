describe('Log in tests', () => {
    context('Functional tests to test logging into wordpress site admin interface', () => {
        beforeEach(() => {
            cy.visit('https://s1.demo.opensourcecms.com/wordpress/wp-login.php ');
        });

        it('FT01', () => {
            cy.get('#user_login').type('wrongusername');
            cy.get('#user_pass').type('wrongpassword');
            cy.get('#wp-submit').click()
            cy.get('#login_error').contains('ERROR: Invalid username. Lost your password?')
        });

        it('FT02', () => {
            cy.get('#user_login').clear().type('opensourcecms');
            cy.get('#user_pass').clear().type('wrongpassword');
            cy.get('#wp-submit').click()
            cy.get('#login_error').contains('ERROR: The password you entered for the username opensourcecms is incorrect. Lost your password?')
        });

        it('FT03', () => {
            cy.get('#user_login').clear();
            cy.get('#user_pass').clear().type('wrongpassword');
            cy.get('#wp-submit').click()
            cy.get('#login_error').contains('ERROR: The username field is empty')
        });

        it('FT04', () => {
            cy.get('#user_login').clear().type('opensourcecms');
            cy.get('#user_pass').clear();
            cy.get('#wp-submit').click()
            cy.get('#login_error').contains('ERROR: The password field is empty')
        });

        it('FT05', () => {
            cy.get('#user_login').clear().type('opensourcecms');
            cy.get('#user_pass').clear().type('opensourcecms');
            cy.get('#wp-submit').click();
            cy.url().should('eq', 'https://s1.demo.opensourcecms.com/wordpress/wp-admin/')
        });

    });
});