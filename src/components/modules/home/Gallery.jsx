import "./Gallery.css";
import gal1 from '../../../assets/gal1.jpeg'
import gal2 from '../../../assets/gal2.jpg'
import gal3 from '../../../assets/gal3.jpeg'
import gal4 from '../../../assets/gal4.jpeg'
import gal5 from '../../../assets/gal5.jpeg'
import gal6 from '../../../assets/gal6.jpeg'
import gal7 from '../../../assets/gal7.jpg'
import gal8 from '../../../assets/gal8.jpg'
import gal9 from '../../../assets/gal9.jpg'
import gal10 from '../../../assets/gal10.jpg'
import gal11 from '../../../assets/gal11.png'
import gal12 from '../../../assets/gal12.jpg'
import gal13 from '../../../assets/gal13.jpg'
import gal14 from '../../../assets/gal14.jpg'
import gal15 from '../../../assets/gal15.jpg'

const Gallery = () => {
  return (
    <div>
        <div className='galleryhead'>
             <h1>Our Gallery</h1>
        <p>Check our albums of various events and activities.</p>
        <div className='gallerypic'>
          <img src={gal1} alt="gal1" />
          <img src={gal2} alt="gal2" />
          <img src={gal3} alt="gal3" />
          <img src={gal4} alt="gal4" />
          <img src={gal5} alt="gal5" />
          <img src={gal6} alt="gal6" />
          <img src={gal7} alt="gal7" />
          <img src={gal8} alt="gal8" />
          <img src={gal9} alt="gal9" />
          <img src={gal10} alt="gal10" />
          <img src={gal11} alt="gal11" />
          <img src={gal12} alt="gal12" />
          <img src={gal13} alt="gal13" />
          <img src={gal14} alt="gal14" />
          <img src={gal15} alt="gal15" />
        </div>
        </div>
       
    </div>
  )
}
export default Gallery
