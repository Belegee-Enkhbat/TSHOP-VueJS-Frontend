describe('User Login', () => {
    it('should log in successfully with valid credentials', () => {
      // Visit the login page
      cy.visit('/login');
  
      // Enter valid username and password
      cy.get('input[type="text"]').type('valid_username');
      cy.get('input[type="password"]').type('valid_password');
  
      // Click the login button
      cy.get('button.modal__btn-login').click();
  
      // Check if redirected to the home page or another expected route
      // Assert the user is logged in (e.g., username displayed)
      cy.url().should('eq', 'http://example.com/home');
      cy.contains('Welcome, valid_username').should('be.visible');
    });
  
    it('should display error message with invalid credentials', () => {
      // Visit the login page
      cy.visit('/login');
  
      // Enter invalid username and password
      cy.get('input[type="text"]').type('invalid_username');
      cy.get('input[type="password"]').type('invalid_password');
  
      // Click the login button
      cy.get('button.modal__btn-login').click();
  
      // Check if error message is displayed
      cy.get('.notification.is-danger').should('be.visible');
      cy.contains('Invalid username or password').should('be.visible');
    });
  });
  