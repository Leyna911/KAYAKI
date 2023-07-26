import { BrowserRouter } from "react-router-dom"
import {Navbar,Hero,Picker,Offers} from "./components"
import { CardCanvas } from "./components"

function App() {
  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
          <Navbar/>   
      </div >
      <div className="bg-primary w-full h-screen py-24">
        <Hero />
        <Picker />
      </div>
      <div className='bg-primary w-full h-auto '>
        <Offers />
        <CardCanvas/>
      </div>
      <div className="">
      
      </div>
      
      
      

      
      
    
    </BrowserRouter>
  )
}

export default App
