import "./Blogcontent.css";
import React, { useState } from "react";
import yoga1 from "../../../assets/yoga1.jpg";
import yoga2 from "../../../assets/yoga2.jpg";
import yoga3 from "../../../assets/yoga3.jpg";
import sc1 from "../../../assets/sc1.jpg";
import sc2 from "../../../assets/sc2.jpg";

const Blog = () => {
  const [showmore, setShowmore] = useState(false);
  return (
    <div>
      <div className="blog-image">
        <img src={yoga1} alt="yoga1pic" />
      </div>
      <div className="blog-card">
        <div className="blog-date">
          <p>01</p>
          <span>Blog</span>
        </div>
        <div className="blog-content">
          <h2>Yoga for Weight Loss: Myth or Reality</h2>
          <p>
            Can yoga really help you lose weight? Or is it just about
            relaxation? This is one of the most common questions we hear from
            beginners. In this blog, we break down the truth about yoga and
            weight loss – what works, what doesn’t, and how you can get results.
          </p>
          {showmore && (
            <p className="more-para">
              Many people believe yoga is only about relaxation and flexibility,
              but the truth is that consistent yoga practice can also support
              weight loss—though in a different way than high-intensity
              workouts. While yoga may not burn calories as quickly as running
              or gym training, it helps regulate metabolism, reduces stress
              (which is often linked to weight gain), improves digestion, and
              builds lean muscle strength. More importantly, yoga creates
              discipline in lifestyle—encouraging mindful eating, better sleep,
              and balanced emotions—which all contribute to sustainable weight
              management.
            </p>
          )}

          <hr />
          <button onClick={() => setShowmore(!showmore)}>
            {showmore ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
      <div className="blog-image">
        <img src={yoga2} alt="yoga2pic" />
      </div>
      <div className="blog-card">
        <div className="blog-date">
          <p>02</p>
          <span>Blog</span>
        </div>
        <div className="blog-content">
          <h2>
            The Science Behind Pranayama: Why Breathing Right Changes Everything
          </h2>
          <p>
            We breathe every second, yet most of us never think about it.
            Pranayama, the ancient art of controlled breathing, is more than
            just an exercise – it’s a science that impacts your mind, body, and
            energy. Let’s explore how this powerful technique can transform your
            health and well-being.
          </p>
          {showmore && (
            <p className="more-para">
              Pranayama works on the simple truth that breath is life energy.
              When you learn to control and deepen your breathing, you’re not
              just taking in more oxygen—you’re balancing your nervous system,
              improving blood circulation, calming the mind, and energizing the
              body at the same time. Science shows that proper breathing reduces
              stress hormones, enhances lung capacity, improves focus, and even
              supports better immunity. By practicing pranayama daily, you’re
              literally training your body and mind to function at their highest
              potential.
            </p>
          )}

          <hr />
          <button onClick={() => setShowmore(!showmore)}>
            {showmore ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
      <div className="blog-image">
        <img src={yoga3} alt="yoga3pic" />
      </div>
      <div className="blog-card">
        <div className="blog-date">
          <p>03</p>
          <span>Blog</span>
        </div>
        <div className="blog-content">
          <h2>యోగా లో వశ్యత (Flexibility) శక్తి</h2>
          <p>
            మనకు వశ్యత అంటే కేవలం కాళ్లు చేతులు వంచడం, పాదాలను తాకడం
            అనిపిస్తుంది. కానీ వాస్తవానికి ఇది దానికంటే చాలా ఎక్కువ. పై ఫోటోలో
            కనిపిస్తున్నట్లుగా, యోగా మన శరీరానికి శక్తి, సంతులనం, సమన్వయం
            అందిస్తుంది. మనం శరీరాన్ని విస్తరించడానికి, వంచడానికి అలవాటు
            చేసుకున్నప్పుడు, కేవలం భంగిమ (posture) మాత్రమే మెరుగవ్వదు – మనస్సు,
            శరీరం మధ్య ఉన్న అనుబంధం కూడా మరింత బలపడుతుంది.
          </p>
          {showmore && (
            <p className="more-para">
              గాయాల నివారణ – వశ్యత కలిగిన కండరాలు, సంధులు ఆకస్మిక కదలికలకు
              సులభంగా అలవాటు పడతాయి. సరైన భంగిమ – నేటి జీవనశైలిలో నడుము,
              వెన్నుపూస గట్టి పడిపోతాయి. యోగా వాటిని సరిచేస్తుంది. రక్తప్రసరణ
              మెరుగుదల – లోతైన స్ట్రెచింగ్ వల్ల రక్తప్రసరణ మెరుగై కండరాలకు,
              అవయవాలకు శక్తి అందుతుంది. మానసిక ప్రశాంతత – వశ్యత శరీరానికే కాదు,
              మనస్సుకూ వస్తుంది. క్రమంగా ఒత్తిడి తగ్గి, మనసు ప్రశాంతంగా
              మారుతుంది. యోగా ప్రత్యేకత సాధారణ స్ట్రెచింగ్ కంటే యోగా ప్రత్యేకం
              ఎందుకంటే ఇది శ్వాస, సంతులనం, మనసు కేంద్రీకరణతో కలిపి ఉంటుంది.
              ఫోటోలో కనిపించే ఆసనం కేవలం వంచడం కాదు – ఇది నమ్మకం, దృష్టి,
              క్రమంగా పరిమితులను అధిగమించడం. చివరి ఆలోచన వశ్యత అంటే పోటీ కాదు,
              ప్రదర్శన కాదు. ఇది ఒక ప్రయాణం. క్రమంగా సాధన చేస్తే శరీరం, మనసు
              రెండూ కొత్త స్థాయికి చేరుకుంటాయి.
            </p>
          )}

          <hr />
          <button onClick={() => setShowmore(!showmore)}>
            {showmore ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
      <div className="blog-image2">
        <img src={sc1} alt="sc1pic" />
      </div>
      <div className="blog-card">
        <div className="blog-date">
          <p>04</p>
          <span>Blog</span>
        </div>
        <div className="blog-content">
          <h2>
            Busy lifestyle? Protect your health with simple chair exercises
          </h2>
          <p>
            Lack of exercise has become a major reason behind today’s growing
            health problems. Long hours of sitting at work and a sedentary
            lifestyle slowly weaken the body and mind. Stress, poor posture, and
            constant fatigue often add to the struggle. But the solution doesn’t
            have to be complicated. Even simple movements, like chair exercises,
            can bring surprising results. With just a few minutes each day, you
            can improve circulation, reduce stiffness, and refresh your energy.
            The beauty of these small efforts is consistency—they prevent
            long-term issues while keeping you active. Yoga offers easy,
            effective ways to stay fit, even during the busiest schedules.
            Through mindful practice, you can strengthen your health and
            maintain balance in daily life.
          </p>

          <hr />
        </div>
      </div>
      <div className="blog-image2">
        <img src={sc2} alt="sc2pic" />
      </div>
      <div className="blog-card">
        <div className="blog-date">
          <p>04</p>
          <span>Blog</span>
        </div>
        <div className="blog-content">
          <h2>
            Stay Active Anywhere with Chair Exercises
          </h2>
          <p>
            Most of us spend hours sitting, whether at work, home, or while
            traveling. This stillness often leads to stiffness, stress, and low
            energy. Chair exercises are an easy way to keep the body moving
            without leaving your seat. With simple stretches and mindful
            movements, they improve circulation, ease tension, and refresh the
            mind. Just a few minutes each day can bring balance, energy, and a
            sense of well-being.
          </p>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Blog;
