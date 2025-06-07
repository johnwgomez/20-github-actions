describe('Home Page', () => {
  it('should load successfully', () => {
    cy.visit('http://localhost:3001'); // Adjust if needed
    cy.contains('Welcome'); // Adjust based on actual page content
  });
});