import "./Videopage.css";
import ytvideo from "../../../assets/ytvideo1.mp4";
import ytvideo2 from "../../../assets/ytvideo2.mp4";
const VideoPage = () => {
  return (
    <div className="videopage">
      <div className="videowrapper">
        <video src={ytvideo} controls></video>
      </div>
      <div className="videotext">
        <h3 className="videoheading">The Fast-Paced Life We Live</h3>
      </div>
      <p className="videopara">
      
        In today’s busy world, life is moving at a relentless pace. We wake up
        early, rush to get ready, hurry to the office, and by evening return
        home only to prepare for sleep. For many, this has become the daily
        routine.
      </p>
      <p className="videopara">
       
        But here’s the real question — are we setting aside even 30 minutes a
        day for the exercise our body truly needs? Unfortunately, for most
        people, the answer is no.
      </p>
      <h3 className="videoheading2">For Office-Goers and Desk Workers</h3>
      <p className="videopara">
        Those who spend long hours sitting at their desks often believe they
        have no time for fitness. But fitness experts say otherwise — exercise
        is still possible right from your chair.
      </p>
      <h1 className="mainhead">
        Chair Exercises - FITNESS WITHOUT LEAVING YOUR SEAT
      </h1>
      <p className="videopara">
        While balancing professional responsibilities, one can perform simple
        and effective exercises without even standing up. These chair-based
        workouts not only save time but also bring significant health benefits.
      </p>
      <div className="video2container"><video className="videowrapper2" src={ytvideo2} controls></video></div>
      
    </div>
  );
};

export default VideoPage;
