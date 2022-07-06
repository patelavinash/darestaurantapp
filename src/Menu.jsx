import React from "react";
import Navbar from "./Navbar";

function Menu(){
    return(
        <>
        <Navbar/>
        <div>
      <h1>Check Our Tasty Menu</h1>
      <br />
      <br />
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#ShowAll">Show All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#Starters">Starters</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#Salads">Salads</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#Specialty">Specialty</a>
        </li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane container active" id="ShowAll">
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: "orange" }}>
                  Lobster Bisque--------------$5.95
                </h3>
                <p>Lorem, deren, trataro, filede, nerada</p>

                <h3 style={{ color: "orange" }}>
                  Crab Cake--------------$7.95
                </h3>
                <p>A delicate crab cake served on a toasted roll with lettuce and tartar sauce</p>

                <h3 style={{ color: "orange" }}>
                  Tuscan Grilled--------------$9.95
                </h3>
                <p>Grilled chicken with provolone, artichoke hearts, and roasted red pesto</p>

                <h3 style={{ color: "orange" }}>
                  Greek Salad--------------$9.95
                </h3>
                <p>Fresh spinach, crisp romaine, tomatoes, and Greek olives</p>

                <h3 style={{ color: "orange" }}>
                  Lobster Roll--------------$12.95
                </h3>
                <p>Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: "orange" }}>
                  Bread Barrel--------------$6.95
                </h3>
                <p>Lorem, deren, trataro, filede, nerada</p>

                <h3 style={{ color: "orange" }}>
                  Caesar Selections--------------$8.95
                </h3>
                <p>Lorem, deren, trataro, filede, nerada</p>

                <h3 style={{ color: "orange" }}>
                  Mozzarella Stick--------------$4.95
                </h3>
                <p>Lorem, deren, trataro, filede, nerada</p>

                <h3 style={{ color: "orange" }}>
                  Spinach Salad--------------$9.95
                </h3>
                <p>Lorem, deren, trataro, filede, nerada</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane container fade" id="Starters">
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: "orange" }}>
                  Lobster Bisque--------------$5.95
                </h3>
                <p>Lorem, deren, trataro, filede, nerada</p>

                <h3 style={{ color: "orange" }}>
                  Mozzarella Stick--------------$4.95
                </h3>
                <p>Lorem, deren, trataro, filede, nerada</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: "orange" }}>
                  Crab Cake--------------$7.95
                </h3>
                <p>A delicate crab cake served on a toasted roll with lettuce and tartar sauce</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane container fade" id="Salads">
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: "orange" }}>
                  Caesar Selections--------------$8.95
                </h3>
                <p>Lorem, deren, trataro, filede, nerada</p>

                <h3 style={{ color: "orange" }}>
                  Spinach Salad--------------$9.95
                </h3>
                <p>Lorem, deren, trataro, filede, nerada</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: "orange" }}>
                  Greek Salad--------------$9.95
                </h3>
                <p>Fresh spinach, crisp romaine, tomatoes, and Greek olives</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane container fade" id="Specialty">
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: "orange" }}>
                  Bread Barrel--------------$6.95
                </h3>
                <p>Lorem, deren, trataro, filede, nerada</p>

                <h3 style={{ color: "orange" }}>
                  Lobster Roll--------------$12.95
                </h3>
                <p>Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: "orange" }}>
                  Tuscan Grilled--------------$9.95
                </h3>
                <p>Grilled chicken with provolone, artichoke hearts, and roasted red pesto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}
export default Menu;