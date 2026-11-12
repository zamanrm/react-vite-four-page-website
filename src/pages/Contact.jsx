import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="page-hero contact-hero container">
        <p className="eyebrow"><span className="status-dot" /> YOUR MOVE</p>
        <h1>Something on your <span>mind?</span></h1>
        <p className="hero-description">Tell us a little about it. Big plans, small questions, early thoughts — we&apos;re all ears.</p>
      </section>

      <section className="contact-section section-pad">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow">01 / SAY HELLO</p>
            <h2>Good things start with a conversation.</h2>
            <p>Share what you&apos;re working on and we&apos;ll get back to you soon.</p>
            <a className="contact-email" href="mailto:hello@nexastudio.example">hello@nexastudio.example <span aria-hidden="true">↗</span></a>
            <div className="availability"><span className="status-dot" /> OPEN FOR SELECT PROJECTS</div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="eyebrow">02 / SEND A NOTE</p>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" placeholder="How should we address you?" required />
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
            <label htmlFor="message">A little about your project</label>
            <textarea id="message" name="message" rows="4" placeholder="What are you thinking about?" required />
            <button className="button button-dark" type="submit">Send your message <span aria-hidden="true">↗</span></button>
            {submitted && <p className="form-feedback" role="status">Thanks for reaching out! This demo form doesn&apos;t send data to a server yet.</p>}
          </form>
        </div>
      </section>

      <section className="contact-note section-pad">
        <div className="container note-inner"><p className="eyebrow">03 / A GOOD PLACE TO START</p><h2>You don&apos;t need to have it all figured out.</h2><p>A rough idea is plenty. We can help you find the right questions and work out the next step together.</p></div>
      </section>

      <section className="contact-last section-pad">
        <div className="container contact-last-inner"><span className="eyebrow">04 / TALK SOON?</span><span className="contact-spark" aria-hidden="true">✳</span><a href="mailto:hello@nexastudio.example">hello@nexastudio.example <span aria-hidden="true">↗</span></a></div>
      </section>
    </main>
  );
}
