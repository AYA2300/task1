
import "./Header.css";
import {Link} from "react-router-dom";
function Header() {
  return (
   
  
    <nav className="navbar navbar-expand-lg navbar">
  <div className="container-fluid">
    <Link to={".#"} className="navbar-brand logo">Villa</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className=" nav justify-content-end links">
        <li className="nav-item">
          <Link to={"./"} className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"PropsPage"} className="nav-link active">Properties</Link>
        </li>
        <li className="nav-item">
          <Link to={"PropertyD"} className="nav-link active">Property Details</Link>
        </li>
        <li className="nav-item">
          <Link to={"ContactUs"} className="nav-link active ">Contact Us</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
    
     
 
  )
}

export default Header
