import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import Navbar from "./Navbar";

function About(){
    return(
        <>
        <Navbar/>
            <div className="card-group">
      <div className="card">
        <div className="card-body">
          <img src="https://i.ndtvimg.com/i/2017-08/thai-curry-620x350_620x350_41502105379.jpg" style={{ height: "500px" }} />
        </div>
      </div>
      <div className="card">
        <div className="card-body ">
          <h1>Eum ipsam laborum deleniti velit pariatur architecto aut nihil</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Duis aute irure dolor in reprehenderite</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.</p>
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit.
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
            storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit.
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
            storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
    <div>
      <div className="text-center">
        <h1><i>Why choose <mark>Our Restaurant?</mark></i></h1>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
      </div>
      <div className="card-group">
        <div className="card">
          <div className="card-body abc">
            <h1 className="abcd" >01</h1>
            <br/>
            <h2><i>Lorem Ipsum</i></h2>
            <br/>
            <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body abc">
            <h1 className="abcd">02</h1>
            <br />
            <h2><i>Repellat Nihil</i></h2>
            <br />
            <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body abc">
            <h1 className="abcd">03</h1>
            <br />
            <h2><i>Ad ad velit qui</i></h2>
            <br />
            <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}
export default About