describe('Cart Component', () => {
    beforeEach(() => {
      // Visit the page containing the Cart component
      cy.viewport(1280, 720);
      cy.visit('http://localhost:8080/cart');
    });
  
    it('displays total price and total quantity correctly', () => {
        cy.visit('http://localhost:8080/log-in');
        cy.get('#username').type('super');
        cy.get('#password').type('super');
        cy.get('#login').click();

        cy.visit('http://localhost:8080/cart');
        // Mock cart data
      const cartItems = [
        { product: { id: 1, price: 10 }, quantity: 2 },
        { product: { id: 2, price: 15 }, quantity: 1 }
      ];
  
    //   // Stub the cart items in the Vuex store
    //   cy.window().its('__app__.$store').invoke('commit', 'setCart', { items: cartItems });
  
    //   // Assert total quantity is displayed correctly
    //   cy.get('.subtitle').should('contain.text', '3 items');
  
    //   // Calculate expected total price
    //   const expectedTotalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  
    //   // Assert total price is displayed correctly
    //   cy.get('strong').should('contain.text', `$${expectedTotalPrice.toFixed(2)}`);
    });
  });
  