import React from "react";
import Navbar from "./Navbar";
function Chefs(){
    return(
        <>
        <Navbar/>
        <div className="container text-center">
      <h1><i>Our Proffesional Chefs</i></h1>
      <h4>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</h4>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/chefs/chefs-1.jpg" height={350} width={320}/>
            <p>Walter White</p>
            <p>Master Chef</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/chefs/chefs-2.jpg" height={350} width={320}/>
            <p>Sarah Johnson</p>
            <p>Patissier</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/chefs/chefs-3.jpg" height={350} width={320}/>
            <p>William Anderson</p>
            <p>Cook</p>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}
export default Chefs;
