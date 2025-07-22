import TodoPage from '../../support/pages/TodoPage';

describe('Gestión de tareas con POM', () => {
  const todoPage = new TodoPage();

  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/');
  });

  it('Debe permitir crear una tarea', () => {
    const taskName = 'Aprender Cypress';
    todoPage.addTodo(taskName);
    todoPage.validateTodoExists(taskName);
  });

  it('Debe permitir completar tarea', () => {
    const taskName = 'Completar tarea';
    todoPage.addTodo(taskName);
    todoPage.completarTarea();
  });
});