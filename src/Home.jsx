import React from "react";
import Navbar from "./Navbar";

function Home(){
return(
<>
<Navbar/>
<div id="demo" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div class="carousel-inner">
 
  <div class="carousel-item active">

    <img src="https://prod-wolt-venue-images-cdn.wolt.com/604780bbf083589badb70661/7b035b30-2a60-11ec-aa02-ee9078bb6186_the_best_thai_and_sushi.jpg" alt="" class="d-block w-100" height="800" width="100%" />
  </div>
  <div class="carousel-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoe8GnPoH5n4ghkgpnqqYFyus-9dKSyxp_yQ&usqp=CAU" alt="" class="d-block w-100" height="800" width="100%" />
  </div>
  <div class="carousel-item">
    <img src="https://www.irvingyummythai.com/wp-content/uploads/2019/02/Vegetarian-Friendly-Thai-Dishes.jpg" alt="" class="d-block w-100" height="800" width="100%" />
  </div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
</>

);
}

export default Home;
