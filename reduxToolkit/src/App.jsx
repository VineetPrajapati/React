import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {

  return (
    <>
    <h1 className='text-6xl'>Redux Toolkit</h1>
    <AddTodo />
    <Todos />

    </>
  )
}

export default App
