import React from "react";
import "./innerhero.css";
import pic1 from "../../../../assets/pic1.jpg";
import pic2 from "../../../../assets/pic2.jpg";
import pic3 from "../../../../assets/pic3.jpg";

const Innerhero = () => {
  return (
    <div className="innerhero">

  <div className="cardscontainer">

    <div className="card">
      <img src={pic1} alt="pic1" />
      <h2 className="headtag">Asana Regular Classes</h2>
      <button>SEE DETAILS</button>
    </div>

    <div className="card">
      <img src={pic2} alt="pic2" />
      <h2 className="headtag">WORKSHOPS</h2>
      <button>SEE DETAILS</button>
    </div>

    <div className="card">
      <img src={pic3} alt="pic3" />
      <h2 className="headtag">Personal Yoga Training</h2>
      <button>SEE DETAILS</button>
    </div>

  </div>

  <p className="para1">
    <b>Buddha Yoga Studio</b>, an abode of holistic Yoga wellness in the
    capital of Telangana.
  </p>

</div>
  );
};
export default Innerhero;
