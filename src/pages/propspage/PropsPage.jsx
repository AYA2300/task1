
import "./props.css"

import property1 from "../../../public/assets/property-01.jpg";
import property2 from "../../../public/assets/property-02.jpg";
import property3 from "../../../public/assets/property-03.jpg";
import property4 from "../../../public/assets/property-04.jpg";
import property5 from "../../../public/assets/property-05.jpg";
import property6 from "../../../public/assets/property-06.jpg";


import Properties from "../../Component/Properties/Properties";
 


import PageHeader from "../../Component/PageHeader/PageHeader"
function PropsPage() {
  return (
    <>
    <PageHeader title="Properties "/>
   
  <div className="properties section">
    <div className="container">
      <div className="row">
        
    <ul className="properties-filter">
      <li>
        <a className="is_active" href="#!" >Show All</a>
      </li>
      <li>
        <a href="#!">Apartment</a>
      </li>
      <li>
        <a href="#!">Villa House</a>
      </li>
      <li>
        <a href="#!">Penthouse</a>
      </li>
    </ul>
    <div className="row properties-box">
    

     
      <Properties img={property1} category="Luxury Villa" price="$2.264.000" address="18 Old Street Miami, OR 97219" Bedrooms="8" Bathrooms="8" Area="545m2" Floor="3th" Parking="6 spots"/>
      <Properties img={property2} category="Luxury Villa" price="$1.180.000" address="54 Mid Street Florida, OR 27001" Bedrooms="6" Bathrooms="5" Area="450m2" Floor="3th" Parking="8 spots"/>
      <Properties img={property3} category="Luxury Villa" price="$1.460.000" address="26 Old Street Miami, OR 38540" Bedrooms="5" Bathrooms="4" Area="225m2" Floor="3th" Parking="10 spots"/>
      <Properties img={property4} category="Apartment" price="$584.500" address="12 New Street Miami, OR 12650" Bedrooms="4" Bathrooms="3" Area="125m2" Floor="25th" Parking="2 car"/>
      <Properties img={property5} category="Penthouse" price="$1.460.000" address="26 Old Street Miami, OR 38540" Bedrooms="4" Bathrooms="4" Area="180m2" Floor="38th" Parking="2 car"/>
      <Properties img={property6} category="Modern Condo" price="$450.000" address="26 Old Street Miami, OR 38540" Bedrooms="5" Bathrooms="4" Area="225m2" Floor="3" Parking="10 spots"/>
      <Properties img={property3} category="Luxury Villa" price="$1.460.000" address="26 Old Street Miami, OR 38540" Bedrooms="5" Bathrooms="4" Area="225m2" Floor="3th" Parking="10 spots"/>
      <Properties img={property2} category="Luxury Villa" price="$1.180.000" address="54 Mid Street Florida, OR 27001" Bedrooms="6" Bathrooms="5" Area="450m2" Floor="3th" Parking="8 spots"/>
      <Properties img={property1} category="Luxury Villa" price="$2.264.000" address="18 Old Street Miami, OR 97219" Bedrooms="8" Bathrooms="8" Area="545m2" Floor="3th" Parking="6 spots"/>

      <div className="row">
        <div className="col-lg-12">
          <ul className="pagination">
            <li><a href="#">1</a></li>
            <li><a className="is_active" href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">&gt;&gt;</a></li>
          </ul>
        </div>
      </div>



</div>
</div>
</div>
</div>




   

   
    </>
    
  )
}
  


export default PropsPage