import React from "react";
import "./Ourcourse.css";
import service1 from "../../../assets/service1.jpg";
import service2 from "../../../assets/service2.jpg";
import service3 from "../../../assets/service3.jpg";
import service5 from "../../../assets/service5.jpeg";
import service6 from "../../../assets/service6.jpeg";
import service4 from "../../../assets/service4.jpg";
import service7 from "../../../assets/service7.jpg";
import { Link } from "react-router-dom";
const Ourcourse = () => {
  return (
    <div>
      <h1 className="heading">Our Courses</h1>
      <div className="courseimg">
        <img src={service1} alt="servicepic" />
        <img className="img2" src={service2} alt="servicepic2" />
      </div>
      <p className="parahead">Thrive360: Wellness for Mind, Body & Life</p>
      <div className="midhead">
        <p className="parah">Anxiety & Stress Relief</p>
        <p>
          Experience peace of mind with our tailored anxiety and stress relief
          programs. We combine natural therapies, guided relaxation, and mental
          clarity practices to help you regain balance and emotional control.
          Live calmer, think clearer, and sleep better.
        </p>
        <p className="parah">Phobia/Depression Management</p>
        <p>
          Overcome fears and break free from depression through personalized,
          compassionate support. Our methods target emotional healing, cognitive
          reframing, and confidence rebuilding, guiding you toward a more
          positive and empowered life.
        </p>
        <p className="parah">Obsessive-Compulsive Disorder Support</p>
        <p>
          Manage OCD symptoms with structured, evidence-based techniques. We
          offer support systems that reduce compulsions, improve focus, and ease
          distress, helping you restore daily functionality and mental freedom.
        </p>
        <p className="parah">Sleep Issue Solutions</p>
        <p>
          Say goodbye to restless nights with holistic solutions for better
          sleep. We address root causes like stress, anxiety, and lifestyle
          patterns to help you enjoy deep, uninterrupted rest naturally.
        </p>
        <p className="parah">Relationship & Workplace Challenges</p>
        <p>
          Navigate relationship stress and workplace conflicts with professional
          guidance. Learn effective communication, boundary-setting, and
          emotional intelligence skills to foster healthier personal and
          professional connections.
        </p>
        <p className="parah">Negative Thoughts & Concentration Difficulties</p>
        <p>
          Rewire your mind and regain focus with our mind-training programs. We
          help eliminate recurring negative thoughts and improve concentration
          through cognitive strategies, mindfulness, and lifestyle adjustments.
        </p>
        <p className="parah">Children’s Physiology & Behavior Issues</p>
        <p>
          Support your child’s growth with our child-friendly behavioral and
          physiological care plans. We address issues like hyperactivity, mood
          swings, and learning difficulties through expert interventions and
          family guidance.
        </p>
        <p className="parah">Gadget Addiction Management</p>
        <p>
          Break free from screen dependency with structured digital detox plans.
          Our approach improves mental clarity, sleep patterns, and real-life
          engagement, restoring a healthy tech-life balance.
        </p>
        <p className="parah">Thyroid Balance & Hormonal Wellness</p>
        <p>
          Restore hormonal harmony and manage thyroid issues naturally. Our
          personalized wellness plans focus on diet, stress management, and
          lifestyle changes to boost energy and improve overall well-being
        </p>
        <p className="parah">Breathing & Digestion Issues</p>
        <p>
          Improve your breath and gut health with integrated healing techniques.
          We offer therapeutic guidance for respiratory and digestive concerns,
          promoting better energy, immunity, and internal balance.
        </p>
        <p className="parah">Back Pain, Joint Pain Relief</p>
        <p>
          Relieve chronic pain through customized physical therapy, posture
          correction, and holistic care. We target the root cause of joint and
          back pain to improve mobility and restore comfort.
        </p>
        <p className="parah">Weight Loss Programs</p>
        <p>
          Achieve sustainable weight loss with science-backed, personalized
          programs. We focus on metabolism, nutrition, and activity plans
          designed for long-term results without compromising your health
        </p>
      </div>
      <div className="lowercontainer">
        <p className="lowerhead1">Regular Yoga Classes for a Balanced Life</p>
        <div className="course-section">
          <div className="course-left">
            <img src={service3} alt="course" />
            <img src={service5} alt="course" />
            <img src={service6} alt="course" />
          </div>

          <div className="course-right">
            <p>
              Our regular yoga classes are designed to help you achieve physical
              fitness, mental clarity, and emotional stability. Perfect for
              beginners and experienced practitioners, these sessions cover
              Hatha Yoga, Vinyasa Flow, Pranayama, and Meditation techniques to
              improve flexibility, strength, and focus.
            </p>

            <h3>Highlights:</h3>
            <p>› Daily sessions in a peaceful environment</p>
            <p>› Personalized guidance by certified instructors</p>
            <p>
              › Perfect for stress relief, weight loss, and overall wellness
            </p>

            <h3>Benefits of Regular Yoga Practice:</h3>
            <p>› Improves flexibility & posture</p>
            <p>› Boosts energy & immunity</p>
            <p>› Reduces anxiety & stress levels</p>

            <h3>Who Can Join?</h3>
            <p>› Beginners who want to learn yoga basics</p>
            <p>› Fitness enthusiasts seeking holistic health</p>
            <p>› Individuals with sedentary lifestyles</p>
            <p>
              Join Our Daily Classes
              <Link to="/contactpage" className="demo-link">
                - Book a free demo now!
              </Link>
            </p>
          </div>
        </div>
        <p className="lowerhead1">Special Yoga & Wellness Workshops</p>
        <div className="course-section1">
          <div className="course-left1">
            <img src={service4} alt="service4pic" />
          </div>
          <div className="course-right1">
            <p>
              Our workshops are tailored to provide deep learning experiences
              for specific health and lifestyle challenges. Whether it's a
              weekend detox program, power yoga for weight loss, or mindfulness
              training, our workshops offer intensive sessions with practical
              techniques you can implement in daily life.
            </p>
            <h4>Highlights:</h4>
            <p>› Weight Management & Slimming Programs</p>
            <p>› Stress Relief & Meditation Bootcamps</p>
            <p>
              › Workshops for Thyroid Balance, Back Pain, and Breathing Issues
            </p>
            <p>
              Explore Upcoming Workshops 
              <Link to="/contactpage" className="demo-link">
                - Book a free demo now!
              </Link>
            </p>
          </div>
        </div>
        <p className="lowerhead1">
          Personalized Yoga Training for Your Unique Needs
        </p>
        <div className="course-section2">
          <div className="course-left2">
            <img src={service7} alt="service7pic" />
          </div>
          <div className="course-right2">
            <p>
              Achieve your wellness goals with one-on-one personal yoga training
              at our studio. Designed for individuals seeking focused attention
              and a customized approach, these sessions are perfect for specific
              health goals, fitness improvement, therapeutic needs, or pregnancy
              yoga.
            </p>
            <h4>Highlights:</h4>
             <p>› Tailored yoga plans based on your fitness and health objectives</p>
            <p>› Dedicated instructor for personalized guidance</p>
            <p>› Flexible scheduling to match your routine</p>
             <p>
              Start Your Personal Yoga Journey 
              <Link to="/contactpage" className="demo-link">
                - Book a free demo now!
              </Link>
            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourcourse;
