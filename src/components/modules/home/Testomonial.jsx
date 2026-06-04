import React from "react";
import "./Testomonial.css";
import test1 from "../../../assets/test-1.jpg";
import test2 from "../../../assets/test-2.jpg";
import test3 from "../../../assets/test-3.jpeg";
import test4 from "../../../assets/test-4.jpeg";
import test5 from "../../../assets/test-5.jpeg";

const Testomonial = () => {
  return (
    <div>
      <div>
        <div className="testupperhead">
          <h1>THE INNER VOICE OF THE STUDENTS</h1>
          <p className="para1">
            A word of mouth of those who truly experienced Yoga with the most
            authentic us!
          </p>
          <div>
            <div className="testomonialbox">
              <div className="imagediv1">
                <img src={test1} alt="test1pic" />
                <h3>Subramanyam Muthakani</h3>
              </div>
              <div className="paradiv1">
                <p>
                  I’ve been attending classes at Buddha Yoga Studio for the past
                  few days, and it’s already made a positive difference in both
                  my body and mind. The atmosphere is very calm and welcoming,
                  and the studio is well-maintained and clean. The instructor is
                  knowledgeable, patient, and explains each posture clearly,
                  which is especially helpful for someone like me who is still
                  getting used to the flow. Every session feels well-balanced —
                  a mix of stretching, breathing, and mindfulness that leaves
                  you feeling refreshed and energized.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="testomonialbox">
          <div className="imagediv1">
            <img src={test2} alt="test2pic" />
            <h3>Hari Keshav</h3>
            </div>
            <div className="paradiv1">
              <p>
                Yoga tutors here are knowledgeable. But one negative aspect is
                that only the students who are good at asanas are hyped and more
                attention is given to them. But attention should be given to
                those who are weak at asanas so that weak students can improve.
                All tutors like Pavan sir etc took care of all the students
                equally except Ramesh sir. Ramesh sirs point of interest was
                only the good student. Unfortunately Ramesh sir is the one who
                takes maximum number of classes. Ramesh sir never pays attention
                to weak students.
              </p>
            
          </div>
        </div>
        <div className="testomonialbox">
          <div className="imagediv1">
            <img src={test3} alt="test3pic" />
            <h3>Subramanyam Muthakani</h3>
          </div>
          <div className="paradiv1">
            <p>
              My brother referred us to Buddha Yoga Studio, and we are so glad
              we joined. Our 8-year-old daughter, who had no prior knowledge of
              yoga, is now doing well and is excited about advancing to the next
              level of poses. We are grateful to Instructor Ramesh Garu for his
              patience, kindness, and friendly approach. I highly recommend this
              studio!
            </p>
          </div>
        </div>
        <div className="testomonialbox">
          <div className="imagediv1">
            <img src={test4} alt="test4pic" />
            <h3>Subramanyam Muthakani</h3>
          </div>
          <div className="paradiv4">
            <p>
              Highly professional and sound knowledged person in yoga . I am
              taking personal online classes but never felt that I'm in virtual
              mode. Very patience and teaches N number of times to us to do yoga
              perfectly. I highly recommend to go with Ramesh and he is master
              in therapy yoga
            </p>
          </div>
        </div>
        <div className="testomonialbox">
          <div className="imagediv1">
            <img src={test5} alt="test5pic" />
            <h3>Subramanyam Muthakani</h3>
          </div>
          <div className="paradiv5">
            <p>
              I would say this is one of the best place to learn Yoga, the
              trainers are very friendly and flexible, we joined recently 1
              month ago and to a surprise all the health Issues we had are
              reduced to a greater extent. I suggest and recommend others to
              take this service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;
