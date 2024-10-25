import './style.css'
import testFunc from './todoapp/todo'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Welcome to My Todo App! </h1>
    <p id='godhelpme'></p>
  </div>
`
testFunc(document.querySelector<HTMLParagraphElement>('#godhelpme')!)