
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
    visitorName?: string;
    displayPic?: string;
};

type TodoListType = {
    todoInput: string;
    todoCategory: string;
    isCompleted: boolean;
};

// create arrays for user details and todolist
const visitorDetails: VisitorDetailsType[] = [];
const todos: TodoListType[] = []

// add username to list
visitorName.addEventListener('change', (event) => {
    event.preventDefault;
    const username = visitorName.value;

    const userInfo: VisitorDetailsType = {
        visitorName: username,
    }
    visitorDetails.push(userInfo);
    console.log(userInfo);

    // add username to local storage
    localStorage.setItem('visitorDetails', JSON.stringify(visitorDetails));
})

// add display picture to list
displayPic.addEventListener('change', (event) => {
    event.preventDefault;
    const username = visitorName.value;
    const userImage = displayPic.value;

    const userInfo: VisitorDetailsType = {
        visitorName: username,
        displayPic: userImage,
    }
    // visitorDetails.push(userInfo);
    visitorDetails[0] = userInfo;
    console.log(userInfo);

    // add displayPic to local storage
    localStorage.setItem('visitorDetails', JSON.stringify(visitorDetails));
})

newTodo?.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoDesc = todoInput?.value;
    const personalTodo = personal?.value;
    const businessTodo = business?.value;

    if (todoDesc) {
        // add task to list
        const task: TodoListType = {
            todoInput: todoDesc,
            todoCategory: personalTodo || businessTodo,
            isCompleted: false,
        };

        addTask(task);
        console.log(task); //remove later

        // display task on screen

        // update local storage
        todoInput.value = '';
        return;
    } 
    alert('Please enter a todo task for today.');


})

function addTask(task: TodoListType): void{
    todos.push(task);
}

// const username = localStorage.getItem('name') || '';

// visitorName.value = username;

// visitorName.addEventListener('change', (event) => {
//     localStorage.setItem('username', event.target.value);
// })

