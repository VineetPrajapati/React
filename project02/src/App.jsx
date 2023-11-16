import './App.css'
import Card from './components/card'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4' >Tailwind test</h1>
      <Card userName = "Vineet" btnText = "View My Prifile"/>
      <Card userName = "Abhiram" btnText = "Visit Me"/>

      

    </>
  )
}

export default App
