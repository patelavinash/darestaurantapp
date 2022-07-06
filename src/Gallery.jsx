import React from "react";
import Navbar from "./Navbar";

function Gallery(){
    return(
        <>
        <Navbar/>
        <div className="container-fluid text-center">
      <h1><i>Some photos from Our Restaurant</i></h1>
      <h4>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</h4>
      <br/>
            <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-1.jpg" height={280} width={310} className="Deez"/>
            <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-2.jpg" height={280} width={310} className="Deez"/>
            <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-3.jpg" height={280} width={310} className="Deez"/>
            <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-4.jpg" height={280} width={310} className="Deez"/>
            <br/>
            <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-5.jpg" height={280} width={310} className="Deez"/>
            <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-6.jpg" height={280} width={310} className="Deez"/>
            <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-7.jpg" height={280} width={310} className="Deez"/>
            <img src="https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-8.jpg" height={280} width={310} className="Deez"/>
    </div>
        </>
    );
}
export default Gallery;