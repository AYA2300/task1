
import featured_icon from "./../../../public/assets/featured-icon.png";
import FeaturedImg from "./../../../public/assets/featured.jpg";

import Hero from "../../Component/Hero/Hero";
import VideoFram from "../../Component/VideoFrame/VideoFram";
import VideoSection from "../../Component/VideoSection/VideoSection";
import FunFacts from "../../Component/fun-facts/FunFacts";
import BestDeal from "../../Component/BestDeal/BestDeal";
import Properties from "../../Component/Properties/Properties";
import Contact from "../../Component/Contact/Contact";
import property1 from "../../../public/assets/property-01.jpg";
import property2 from "../../../public/assets/property-02.jpg";
import property3 from "../../../public/assets/property-03.jpg";
import property4 from "../../../public/assets/property-04.jpg";
import property5 from "../../../public/assets/property-05.jpg";
import property6 from "../../../public/assets/property-06.jpg";
import "./Home.css";
import Accordion from "../../Component/Accordion/Accordion";
import Featured from "../../Component/Featured/Featured";





function Home() {
  return (
    <>
      <Hero/>

      <div className="featured section">
      <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="left-image">
            <img src={FeaturedImg} alt=""/>
            <a href="#"> <img className="featured_icon" src={featured_icon} alt="" /> </a>
        
              </div>
            </div>
            
        <div className="col-lg-5">
          <div className="section-heading">
            <h6>| Featured</h6>
            <h2>Best Appartment &amp; Sea view</h2>
          </div>
          <Accordion/>
           </div>
           <div className="col-lg-3">
            <Featured area="250m2"/>


           </div>
            </div>
           
             </div>
               </div>
          
      

      <VideoSection/>

      <VideoFram/>
      <FunFacts/>
      <BestDeal/>
      <div className="col-lg-4 offset-lg-4">
          <div className="section-heading text-center">
            <h6>| Properties</h6>
            <h2>We Provide The Best Property You Like</h2>
          </div>
        </div>
  <div className="properties section">
  <div className="properties section">
    <div className="container">
      <div className="row">
     
      <Properties img={property1} category="Luxury Villa" price="$2.264.000" address="18 Old Street Miami, OR 97219" Bedrooms="8" Bathrooms="8" Area="545m2" Floor="3th" Parking="6 spots"/>
      <Properties img={property2} category="Luxury Villa" price="$1.180.000" address="54 Mid Street Florida, OR 27001" Bedrooms="6" Bathrooms="5" Area="450m2" Floor="3th" Parking="8 spots"/>
      <Properties img={property3} category="Luxury Villa" price="$1.460.000" address="26 Old Street Miami, OR 38540" Bedrooms="5" Bathrooms="4" Area="225m2" Floor="3th" Parking="10 spots"/>
      <Properties img={property4} category="Apartment" price="$584.500" address="12 New Street Miami, OR 12650" Bedrooms="4" Bathrooms="3" Area="125m2" Floor="25th" Parking="2 car"/>
      <Properties img={property5} category="Penthouse" price="$1.460.000" address="26 Old Street Miami, OR 38540" Bedrooms="4" Bathrooms="4" Area="180m2" Floor="38th" Parking="2 car"/>
      <Properties img={property6} category="Modern Condo" price="$450.000" address="26 Old Street Miami, OR 38540" Bedrooms="5" Bathrooms="4" Area="225m2" Floor="3" Parking="10 spots"/>
</div>
</div>
</div>
</div>

  <div className="contact section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="section-heading text-center">
            <h6>| Contact Us</h6>
            <h2>Get In Touch With Our Agents</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Contact/>
      
      

    </>

  )
}

export default Home












  //         <div class="accordion" id="accordionExample">
  //           <div class="accordion-item">
  //             <h2 class="accordion-header" id="headingOne">
  //               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  //                 Best useful links ?
  //               </button>
  //             </h2>
  //             <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
  //               <div class="accordion-body">
  //               Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it.</div>
  //             </div>
  //           </div>
  //           <div class="accordion-item">
  //             <h2 class="accordion-header" id="headingTwo">
  //               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
  //                 How does this work ?
  //               </button>
  //             </h2>
  //             <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
  //               <div class="accordion-body">
  //                 Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //               </div>
  //             </div>
  //           </div>
  //           <div class="accordion-item">
  //             <h2 class="accordion-header" id="headingThree">
  //               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
  //                 Why is Villa Agency the best ?
  //               </button>
  //             </h2>
  //             <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
  //               <div class="accordion-body">
  //                 Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col-lg-3">
  //         <div class="info-table">
  //           <ul>
  //             <li>
  //               <img src="assets/images/info-icon-01.png" alt="" style="max-width: 52px;">
  //               <h4>250 m2<br><span>Total Flat Space</span></h4>
  //             </li>
  //             <li>
  //               <img src="assets/images/info-icon-02.png" alt="" style="max-width: 52px;">
  //               <h4>Contract<br><span>Contract Ready</span></h4>
  //             </li>
  //             <li>
  //               <img src="assets/images/info-icon-03.png" alt="" style="max-width: 52px;">
  //               <h4>Payment<br><span>Payment Process</span></h4>
  //             </li>
  //             <li>
  //               <img src="assets/images/info-icon-04.png" alt="" style="max-width: 52px;">
  //               <h4>Safety<br><span>24/7 Under Control</span></h4>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>