import icon1 from "../../../public/assets/phone-icon.png"
import icon2 from "../../../public/assets/email-icon.png"
import "./Contact.css"
function Contact() {
  return (
    <div className="contact-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div id="map">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="500px" frameborder="0" style="border:0; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);" allowfullscreen=""></iframe>
           */}</div>
          <div className="row">
            <div className="col-lg-12">
              <div className="item phone">
                <img src={icon1} alt=""/>
                <h6>010-020-0340<br/><span>Phone Number</span></h6>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item email">
                <img src={icon2} alt=""/>
                <h6>info@villa.co<br/><span>Business Email</span></h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <form id="contact-form" action="" method="post">
            <div className="row">
              <div className="col-lg-12">
                <fieldset>
                  <label>Full Name</label>
                  <input type="name"placeholder="Your Name..."/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label >Email Address</label>
                  <input type="text"  placeholder="Your E-mail..." />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label>Subject</label>
                  <input type="subject" placeholder="Subject..." />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label >Message</label>
                  <textarea name="message"  placeholder="Your Message"></textarea>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit"  className="orange-button">Send Message</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Contact