import { Link } from "react-router-dom";

const highlights = [
  { number: "01", title: "Strategy first", text: "Clear thinking and a focused plan before the pixels." },
  { number: "02", title: "Made for people", text: "Simple, useful experiences your customers enjoy using." },
  { number: "03", title: "Built to grow", text: "Flexible foundations ready for what comes next." },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> INDEPENDENT DIGITAL STUDIO</p>
          <h1>Good ideas deserve <span>a great</span> digital home.</h1>
          <p className="hero-description">
            We help ambitious people turn big ideas into clear, engaging digital experiences.
            Thoughtfully designed. Built to make a difference.
          </p>
          <div className="button-row">
            <Link className="button button-dark" to="/services">
              Explore our services <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" to="/about">Get to know us <span aria-hidden="true">→</span></Link>
          </div>
          <p className="hero-footnote">SMALL TEAM. BIG-PICTURE THINKING.</p>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of creative ideas" role="img">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-card art-card-one"><span>MAKE IT</span><strong>matter.</strong></div>
          <div className="art-card art-card-two"><span>IDEA NO.</span><strong>042</strong></div>
          <span className="art-spark spark-one" aria-hidden="true">✳</span>
          <span className="art-spark spark-two" aria-hidden="true">✳</span>
          <span className="art-label">A LITTLE MORE HUMAN <span>↗</span></span>
        </div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <p className="eyebrow">01 / WHAT WE BELIEVE</p>
          <div>
            <h2>Digital should feel less like noise and more like <span>you.</span></h2>
            <p className="large-copy">The best work starts with a good conversation. We listen closely, get to the heart of your challenge, and create digital things with purpose.</p>
          </div>
        </div>
      </section>

      <section className="highlights-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">02 / OUR APPROACH</p><h2>Small details. <span>Big picture.</span></h2></div>
            <p>Good work is a balance of clear thinking, thoughtful design, and the right tools.</p>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta section-pad">
        <div className="container cta-inner">
          <div><p className="eyebrow">03 / YOUR NEXT CHAPTER</p><h2>Have a good one in mind?</h2></div>
          <Link className="button button-light" to="/contact">Let&apos;s make it happen <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
