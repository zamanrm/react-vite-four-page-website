import { Link } from "react-router-dom";

const values = [
  { number: "01", title: "Stay curious", text: "Ask better questions, keep learning, and look at familiar things in new ways." },
  { number: "02", title: "Keep it human", text: "Behind every brief is a person. We make work that respects their time and attention." },
  { number: "03", title: "Care about craft", text: "The small choices add up. We sweat the details so the whole thing feels effortless." },
];

export default function About() {
  return (
    <main>
      <section className="page-hero container">
        <p className="eyebrow"><span className="status-dot" /> A LITTLE ABOUT US</p>
        <h1>Good people making <span>good things</span> for good reasons.</h1>
        <p className="hero-description">We&apos;re a small, independent creative studio bringing clarity, care, and a little bit of joy to the digital world.</p>
      </section>

      <section className="about-story section-pad">
        <div className="container story-grid">
          <div className="story-art"><div className="story-shape"><span>GOOD<br />THINGS<br /><em>GROW.</em></span></div><span className="story-caption">A studio built on good conversations.</span></div>
          <div className="story-copy">
            <p className="eyebrow">01 / OUR STORY</p>
            <h2>Small by choice.<br /><span>Thoughtful by nature.</span></h2>
            <p>Nexa Studio began with a simple idea: digital work can be ambitious without being complicated. We bring strategy, design, and technology together to help people move forward.</p>
            <p>We work as a close-knit team, stay curious, and believe the best partnerships feel like a true collaboration from day one.</p>
          </div>
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">02 / WHAT MATTERS TO US</p><h2>Our north <span>stars.</span></h2></div><p>Principles that keep us grounded, especially when the work gets exciting.</p></div>
          <div className="values-list">
            {values.map((value) => (
              <article className="value-row" key={value.number}>
                <span className="card-number">{value.number}</span><h3>{value.title}</h3><p>{value.text}</p><span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta section-pad">
        <div className="container cta-inner"><div><p className="eyebrow">03 / THE NEXT STEP</p><h2>Let&apos;s make something meaningful.</h2></div><Link className="button button-dark" to="/contact">Meet your new team <span aria-hidden="true">↗</span></Link></div>
      </section>
    </main>
  );
}
