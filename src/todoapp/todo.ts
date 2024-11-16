
// Get required elements for user details from the page
const visitorName = document.querySelector<HTMLInputElement>('#name')!;
console.log(visitorName);

const displayPic = document.querySelector<HTMLInputElement>('#displayPic')!;
console.log(displayPic);

// get todo elements from the page
const newTodo = document.querySelector<HTMLFormElement>('#new-todo')!;
console.log(newTodo);

const todoInput = document.querySelector<HTMLInputElement>('#todo-input')!;
console.log(todoInput)

const business = document.querySelector<HTMLInputElement>('#category1')!;
console.log(business);

const personal = document.querySelector<HTMLInputElement>('#category2')!;
console.log(personal);

// Grab element to list todo from the page


const todoList = document.querySelector<HTMLDivElement>('#todo-list')!;
console.log(todoList);

type VisitorDetailsType = {
    visitorName: string;
    displayPic: string;
};

type TodoListType = {
    todoinput: string;
    todoCategory: string;
    isCompleted: boolean;
};

const visitorDetails: VisitorDetailsType[] = [];
const todos: TodoListType[] = []

newTodo?.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoDesc = todoInput?.value;
    if (todoDesc && business || personal) {
      console.log(todoDesc);
        newTodo.value = '';
        return;
    } 

    alert('Please enter a todo list for today.')
})

const username = localStorage.getItem('name') || '';

visitorName.value = username;

visitorName.addEventListener('change', (event: string): void => {
    localStorage.setItem('username', event.target.value);
})