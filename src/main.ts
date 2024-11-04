import './css/style.css'
import testFunc from './todoapp/todo'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <main>
    <section class="greeting">
      <h2 class="title">Welcome, <input type="text" id="name" placeholder="Name here">
      </h2>
    </section>

    <section class="create-todo">
      <h3>CREATE A TODO</h3>
      <form id="new-todo">
        <h4>What do you wanna do today?</h4>
        <input 
          type="text" 
          name="todo-input" 
          id="todo-input" 
          placeholder="e.g., Call Dad">
        
        <h4>Pick a category</h4>
        <div class="todo-option">

          <label>
            <input 
              type="radio" 
              name="category" 
              id="category1" 
              value="business">
            <span class="bubble business"></span>
            <div>Business</div>
          </label>

          <label>
            <input 
              type="radio" 
              name="category" 
              id="category2" 
              value="personal">
            <span class="bubble business"></span>
            <div>Personal</div>
          </label>
        </div>

        <input type="submit" value="Add todo">
      </form>
  </main>

  <section class="todo-list">
    <h3>TODO LIST</h3>
    <div class="list" id="todo-list">
      <div class="todo-item">
        <label>
          <input type="checkbox">
          <span class="bubble" business></span>
        </label>

        <div class="todo-content">
          <input type="text" value="Make a video" readonly>
        </div>

          <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
      </div>
    </div>
  </section>  
`
testFunc(document.querySelector<HTMLParagraphElement>('#godhelpme')!)