import React from "react";
import "./Allbooks.css";

function Allbooks() {
  return (
    <div className="books-page">
      <div className="books">
        
          <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU"
            alt=""
          ></img>
          <p className="bookcard-title">The Subtle Art Of Not Giving A Fuck</p>
          <p className="bookcard-author">By Mark Manson</p>
          <div className="bookcard-category">
            <p>COMIC</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
      </div>
    </div>
  );
}

export default Allbooks;
