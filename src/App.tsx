
import './App.css'
import DocUpload from './components/DocUpload'
import Nav from './components/Nav'

function App() {

  return (
    <div className='h-screen'>
      <Nav/>
      <div className='flex flex-col justify-center px-40 mt-20'>
      <DocUpload/>
      {/* <ChatBot/> */}
      </div>
    </div>
  )
}

export default App
