import React from "react";
import Navbar from "./Navbar";

function Contact(){
    return(
        <>
        <Navbar/>
         <div className="container text-center text-white" style={{backgroundImage:"url('https://www.betterteam.com/images/bar-manager-job-description-3263x2447-20201119.jpeg?crop=40:21,smart&width=1200&dpr=2')", height:"620px", width:"100%"}}>
      <img src="https://s1.dmcdn.net/v/Mzbz41QObQKJtohtC/x1080" height="200" width="400" className="rounded-circle"/>
      <h3>Donald Trump</h3>
      <p style={{ fontSize:"30px"}}>Weird Old Funniest President</p>
      <p style={{ fontSize:"30px"}}>rwd a garlgawl arwglr arwgil iaigirwagi aaqalh feul gufl sgulx glz zglzgug</p>
    </div>
    <div className="text-center text-dark">
      <h1>Contact Us</h1>
      <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177.10117691148199!2d55.214499407340234!3d25.034679399999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6de80ba52cfb%3A0xc00ae0576dddf4a8!2s26M7%2BVV8%20Carmen%20St%20E%20-%20Dubai%20Sports%20City%20-%20Dubai!5e1!3m2!1sen!2sae!4v1653208695839!5m2!1sen!2sae" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className="text-center">
      <form method="post">
        <input type={"text"} placeholder="Your name" size={"50"}></input>
        <br/>
        <input type={"email"} placeholder="Your Email" size={"50"}></input>
        <br/>
        <input type={"text"} placeholder="Subject" size={"50"}></input>
        <br/>
        <textarea rows={4} cols={15} placeholder=" Message from Sugondia, Example:Sugondeez nuts" size={"100%"}></textarea>
        <br/>
        <input type={"submit"} value="Submit Message"></input>
      </form>
    </div>
    <div className="text-center text-white" style={{backgroundColor:"black"}}>
      <h1 className="text-warning">Delicious</h1>
      <br/>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <a>
        <img src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg" height="40px" width="40px" className="rounded-circle"/>
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" height="40px" width="40px" className="rounded-circle"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" height="40px" width="40px" className="rounded-circle"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png" height="40px" width="40px" className="rounded-circle"/>
        <img src="https://seeklogo.com/images/S/skype-icon-logo-62E333BBBA-seeklogo.com.png" height="40px" width="40px" className="rounded-circle"/>
      </a>
    </div>
        </>
    );
}
export default Contact;