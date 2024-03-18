
//import './App.css'
import Home from "./pages/Home/Home"
import { Route, Routes } from "react-router-dom"
import PropsPage from "./pages/propspage/PropsPage"
import Property_Details from "./pages/PropertyD/PropertyD"
import Contact_Us from "./pages/ContactUs/ContactUs"
import Header from "./Component/Header/Header"



function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path="#" element={<Home/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/PropsPage" element={<PropsPage/>} />
      <Route path="/PropertyD" element={<Property_Details/>} />
      <Route path="/ContactUs" element={<Contact_Us/>} />
    </Routes>


     
    </>
  )
}

export default App
