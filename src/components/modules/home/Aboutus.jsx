import React from "react";
import "./aboutus.css";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <h1>Buddha Yoga Studio – A Space for Balance, Strength & Inner Peace</h1>
      <p>
        Welcome to <b>Buddha Yoga Studio</b> , your trusted destination for
        holistic yoga wellness in Hyderabad. Our mission is to help individuals
        achieve harmony between body, mind, and spirit through authentic yoga
        practices and mindful living{" "}
      </p>
      <p>
        At Buddha Yoga Studio, we blend{" "}
        <b> traditional yogic wisdom with modern wellness needs ,</b> <br />
        creating programs that suit every individual – from beginners to
        advanced practitioners. Our experienced instructors are passionate about
        guiding you toward a healthier, stress-free, and balanced life.
      </p>
      <div className="aboutuspara">
        <p className="midhead">Why Choose Buddha Yoga Studio?</p>
        <ul className="whylist">
          <li>Authentic Yoga Practices rooted in ancient traditions</li>

          <li>Certified & Experienced Instructors with years of expertise</li>

          <li>Peaceful Environment for maximum focus and relaxation</li>

          <li>Customized Programs for every age and health condition</li>
        </ul>
        <p className="midhead1">
          Our Philosophy – Life School for Better Living
        </p>
        <p className="aboutus1">
          At Buddha Yoga Studio, we believe yoga is not just an exercise but a{" "}
          <b>complete lifestyle</b> . We follow a holistic approach focusing on:
        </p>
        <div className="aboutcontent">
          <h2 className="subhead">
            We follow a holistic approach focusing on:
          </h2>

          <ul className="focuslist">
            <li>
              <b>Ahar (Diet):</b> Guidance on healthy eating for energy and
              balance
            </li>

            <li>
              <b>Vihar (Recreation):</b> Relaxation techniques to rejuvenate the
              mind and body
            </li>

            <li>
              <b>Achar (Behavior):</b> Positive habits for a disciplined,
              stress-free life
            </li>

            <li>
              <b>Vichar (Thinking):</b> Mindfulness practices for mental clarity
              and peace
            </li>
          </ul>

          <p className="contentpara">
            Our goal is to empower you with tools to live a life free of stress,
            illness, and negativity, and instead filled with strength, calmness,
            and positivity.
          </p>

          <h2 className="subhead">What Makes Us Unique?</h2>

          <p className="contentpara">
            We offer <b>specialized yoga programs</b> that cater to modern
            lifestyle challenges such as:
          </p>

          <ul className="uniquelist">
            <li>Stress & Anxiety Management</li>

            <li>Weight Loss & Power Yoga</li>

            <li>
              Therapeutic Yoga for Back Pain, Joint Issues, and Breathing
              Disorders
            </li>

            <li>Pregnancy Yoga for expecting mothers</li>

            <li>Meditation & Mindfulness Training</li>

            <li>Workshops for Thyroid, Digestion, and Overall Wellness</li>
          </ul>

          <p className="contentpara">
            Our approach combines{" "}
            <b>
              practical yoga techniques, breathing practices, meditation, and
              lifestyle coaching
            </b>{" "}
            so you can integrate yoga into daily life.
          </p>

          <h2 className="subhead">Join Buddha Yoga Studio Today!</h2>

    <p className="contentpara">
          
  Take the first step toward a healthier, balanced, and happier life.{" "}
  <Link to="/contactpage" className="demo-link">
    Book your free demo class
  </Link>{" "}
  and experience the difference yoga can make!
</p>
          
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
