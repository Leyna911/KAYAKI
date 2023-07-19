import { BrowserRouter } from "react-router-dom"
import {Navbar,Hero} from "./components"


function App() {
  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
          <Navbar/>   
      </div >
      <div className="bg-primary w-full h-screen py-24 ">
        <Hero/>
      </div>
      
    
    </BrowserRouter>
  )
}

export default App
