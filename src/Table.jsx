import React from "react";
import Navbar from "./Navbar";

function Table(){
    return(
        <>
        <Navbar/>
        <div>
      <h1 className="text-center deez-nuts">Book A Table</h1>
      <p className="text-center deez-nuts">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci 
      expedita at voluptas atque vitae autem.</p>
      <form method="post">
        <input type={"text"} placeholder="Your name" size={"50"}></input>
        <input type={"email"} placeholder="Your Email" size={"50"}></input>
        <input type={"number"} placeholder="Your Phone Number" size={"50"}></input>
        <br/>
        <input type={"date"} placeholder="" size="50"></input>
        <input type={"time"} placeholder="Time" size="50"></input>
        <input type={"number"} placeholder="# of people" size="50"></input>
        <br/>
        <textarea rows={4} cols={15} placeholder="Sugondeez nuts" size={"100%"}></textarea>
      </form>
    </div>
        </>
    );
}

export default Table;