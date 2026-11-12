import { Link } from "react-router-dom";

const services = [
  { number: "01", title: "Brand & strategy", text: "Find your focus, define your story, and give your brand a direction people can believe in.", tags: ["Positioning", "Visual identity", "Art direction"] },
  { number: "02", title: "Web design", text: "Make the first impression count with useful, clear, and genuinely engaging digital experiences.", tags: ["UX / UI", "Prototyping", "Design systems"] },
  { number: "03", title: "Development", text: "Bring your experience to life with modern, responsive websites built for real people.", tags: ["React websites", "Responsive builds", "Optimisation"] },
];

export default function Services() {
  return (
    <main>
      <section className="page-hero container">
        <p className="eyebrow"><span className="status-dot" /> WHAT WE DO</p>
        <h1>From first spark to <span>the real thing.</span></h1>
        <p className="hero-description">The right mix of thinking, design, and technology to take your next idea somewhere good.</p>
      </section>

      <section className="services-list-section section-pad">
        <div className="container">
          <div className="services-intro"><p className="eyebrow">01 / OUR SERVICES</p><p>Thoughtful work, shaped around what you actually need. Choose a starting point or bring us the whole challenge.</p></div>
          <div className="services-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="card-number">{service.number}</span>
                <div className="service-main"><h2>{service.title}</h2><p>{service.text}</p><div className="tag-list">{service.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="container process-grid">
          <div><p className="eyebrow">02 / HOW WE WORK</p><h2>Clear steps.<br /><span>Good momentum.</span></h2><p className="process-copy">No black boxes or big reveals. We work openly, keep you in the loop, and make progress together.</p></div>
          <div className="process-steps">
            <article><span>01</span><div><h3>Listen & learn</h3><p>We get to know your goals, your people, and what success looks like.</p></div></article>
            <article><span>02</span><div><h3>Make a plan</h3><p>We shape a clear, practical direction and agree on the important things.</p></div></article>
            <article><span>03</span><div><h3>Make it real</h3><p>We design, build, and refine with you, right through to launch.</p></div></article>
          </div>
        </div>
      </section>

      <section className="services-cta section-pad">
        <div className="container cta-inner"><div><p className="eyebrow">03 / READY WHEN YOU ARE</p><h2>What could we make together?</h2></div><Link className="button button-light" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></div>
      </section>
    </main>
  );
}
