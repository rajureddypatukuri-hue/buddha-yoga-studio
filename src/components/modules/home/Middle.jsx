
import "./middle.css";
import cer1 from "../../../assets/cer1.jpg"
import cer2 from "../../../assets/cer2.jpg"
import cer3 from "../../../assets/cer3.jpg"
import cer4 from "../../../assets/cer4.jpg"
import cer5 from "../../../assets/cer5.jpg"
import cer6 from "../../../assets/cer6.jpg"
import cer7 from "../../../assets/cer7.png"


const Middle = () => {
  return (
    <div>
        <div className='middlehead'><p>Our Certifications</p></div>
        <div className="certificates">
            <img src={cer1} alt="cer1" />
            <img src={cer2} alt="cer2" />
            <img src={cer3} alt="cer3" />
            <img src={cer4} alt="cer4" />
            <img src={cer5} alt="cer5" />
            <img src={cer6} alt="cer6" />
            <img src={cer7} alt="cer7" />
            

        </div>
    </div>
  )
}

export default Middle