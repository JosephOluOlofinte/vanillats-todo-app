import './css/style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <main>
    <section class="greeting">
      <h2 class="title">Hey, <input type="text" name="name" id="name" placeholder="Name here">
      </h2>
      <div class="displayPic"><input type="file" name="displayPic" id="displayPic" accept="image/png, image/jpeg"></div>
    </section>

    <section class="create-todo">
      <form id="new-todo">
        <h3>Got something to achieve today?</h3>
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
            <span class="bubble personal"></span>
            <div>Personal</div>
          </label>
        </div>

        <input type="submit" value="Add todo">
      </form>
  </main>

  <section class="todo-list">
    <h3>Tasks on your list</h3>
    <div class="list" id="todo-list">

<!--      <div class="todo-item done">
        <label>
          <input type="checkbox">
          <span class="bubble business"></span>
        </label>

        <div class="todo-content">
          <input type="text" value="Make a video" readonly>
        </div>

          <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox">
          <span class="bubble personal"></span>
        </label>

        <div class="todo-content">
          <input type="text" value="Meet up with mom" readonly>
        </div>

          <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
      </div> -->
    </div>
  </section>  
`
