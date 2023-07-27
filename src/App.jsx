import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Navbar,Hero,Picker,Offers} from "./components"
import { CardCanvas } from "./components"

function App() {
  

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="relative z-100  ">
          <Navbar/>   
      </div >
      
      <div className=" py-24">
        <Hero />
        <Picker />
      </div>   
        <Offers />
        <CardCanvas/>
      </div>
      
      
      
      

      
      
    
    </BrowserRouter>
  )
}

export default App
