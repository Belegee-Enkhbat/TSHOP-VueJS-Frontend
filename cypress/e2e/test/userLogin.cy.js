describe('User Login', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    // веб хуудаст хандах
    cy.visit('http://localhost:8080/log-in');
  })
  
  // Тестийн тохиолдол 1
  it('Зөв бүртгэлээр нэвтэрч байгааг шалгах', () => {
    // нэвтрэх нэр нууц үг оруулна
    cy.get('#username').type('super');
    cy.get('#password').type('super');
    // нэвтрэх товч дээр дарна
    cy.get('#login').click();
    // нэвтэрсэн эсэхийг шалгана
    cy.url().should('eq', 'http://localhost:8080/');
    cy.contains('Миний бүртгэл').should('be.visible');
  });

  // Тестийн тохиолдол 2
  it('Буруу бүртгэлээр нэвтэрэхэд алдаа өгч байгааг шалгах', () => {
    // нэвтрэх нэр нууц үг оруулна
    cy.get('#username').type('super');
    cy.get('#password').type('123');
    // нэвтрэх товч дээр дарна
    cy.get('#login').click();
    // нэвтэрсэн эсэхийг шалгана
    cy.get('.notification.is-danger').should('be.visible');
    cy.contains('Unable to log in with provided credentials.').should('be.visible');
  });
});
