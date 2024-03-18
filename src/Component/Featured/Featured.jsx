
import icon2 from "./../../../public/assets/info-icon-02.png";
import icon3 from "./../../../public/assets/info-icon-03.png";
import icon4 from "./../../../public/assets/info-icon-04.png";
import icon1 from "./../../../public/assets/info-icon-01.png";

import "./FeaturedStyle.css";
function Featured(props) {
  return (
    <>
   
          
          
          
              <div className="info-table">\
              <ul>
               <li>
                <img src={icon1}alt=""/>
                <h4>{props.area}<br/><span>/Total Flat Space</span></h4>
              </li>
              <li>
                <img src={icon2} alt=""/>
                <h4>Contract<br/><span>Contract Ready</span></h4>
              </li>
              <li>
                <img src= {icon3}alt=""/>
                <h4>Payment<br/><span>Payment Process</span></h4>
              </li>
              <li>
                <img src={icon4} alt=""/>
                <h4>Safety<br/><span>24/7 Under Control</span></h4>
              </li>
            </ul>
          </div>
           
      

     
      
     </>
  )
}

export default Featured



