describe('Password strength', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:8080/sign-up');
    cy.get('#username').type('super2');
  })

  it('6 с бага тэмдэгт орсон', () => {
    const pass = 'Aa1*';
    cy.get('#password').type(pass);
    cy.get('#password2').type(pass);
  });
  it('1 том үсэг ороогүй ', () => {
    const pass = 'aaaaaa1*';
    cy.get('#password').type(pass);
    cy.get('#password2').type(pass);
  });
  it('1 жижиг үсэг ороогүй ', () => {
    const pass = 'A1111111*';
    cy.get('#password').type(pass);
    cy.get('#password2').type(pass);
  });
  it('1 тусгай тэмдэг ороогүй ', () => {
    const pass = 'Aaaaaaa1';
    cy.get('#password').type(pass);
    cy.get('#password2').type(pass);
  });

  afterEach(() => {
    cy.get('#signUp').click();
    cy.get('.notification.is-danger').should('be.visible');
  });
});
