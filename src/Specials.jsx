import React from "react";
import Navbar from "./Navbar";
function Specials(){
    return(
        <>
        <Navbar/>
         <div>
      <h1>Check our Specials</h1>
      <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
      <div>
        <div className=""></div>
        <ul class="nav nav-tabs flex-column">
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#ModSitEst">Modi sit est</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu1">Menu 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu2">Menu 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu1">Menu 1</a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane container fade" id="ModSitEst"></div>
           <div className="card-group">
             <div className="card">
                <div className="card-body">
                  <h1>Architecto ut aperiam autem id</h1>
                  <p>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                  <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit 
                   magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil.
                   Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero.
                  </p>
                </div>
              </div>
            <div className="card">
              <div className="card-body">
                <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/specials-1.jpg"/>
              </div>
            </div>
          </div>
          <div class="tab-pane container fade" id="menu1"></div> 
          <div class="tab-pane container fade" id="menu2"></div>
          <div class="tab-pane container fade" id="menu1"></div>
          <div class="tab-pane container fade" id="menu2"></div>
        </div>
      </div>
    </div>

        </>
    );
}
export default Specials;