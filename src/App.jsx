import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Navbar from "./components/Navbar"
import ResultPage from "./components/pages/ResultPage"
import Offers from "./components/Offers"

function App() {
 

  return (
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="resultPage" element={<ResultPage />}/>
        <Route path="servicesSection " element={<Offers/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
