class TodoPage {
  // Selectores
  elements = {
    inputNewTodo: () => cy.get('input.new-todo'),
    todoItemLabel: (itemText) => cy.contains('label', itemText),
    todoItems: () => cy.get('.todo-list li'),
    deleteButton: (itemText) =>
      this.todoItemLabel(itemText).parent().find('button.destroy'),
    circulo: () => cy.get('[data-testid="todo-item-toggle"]')
  };
    // Métodos
  addTodo(taskName) {
    this.elements.inputNewTodo().type(`${taskName}{enter}`);
  }
completarTarea() {
    this.elements.circulo().click();
  }

  deleteTodo(taskName) {
    this.elements.todoItemLabel(taskName).dblclick();
    this.elements.deleteButton(taskName).click();
  }

  validateTodoExists(taskName) {
    this.elements.todoItemLabel(taskName).should('be.visible');
  }
}

export default TodoPage;