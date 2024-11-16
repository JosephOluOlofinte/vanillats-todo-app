
// Get required HTML elements from the page
const visitorName = document.querySelector<HTMLInputElement>('#name')!;
console.log(visitorName);

const displayPic = document.querySelector<HTMLInputElement>('#displayPic')!;
console.log(displayPic);

const newTodo = document.querySelector<HTMLFormElement>('#new-todo')!;
console.log(newTodo);

const todoInput = document.querySelector<HTMLInputElement>('todo-input')!;
console.log(todoInput)

const business = document.querySelector<HTMLInputElement>('category1')!;
console.log(business);

const personal = document.querySelector<HTMLInputElement>('category2')!;
console.log(personal);

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

console.log(visitorDetails);
console.log(todos);