import { testimonials } from '../data/testimonials.js';

export function Testimonials() {
  return (
    <section className="section alt" id="events">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Regulars</p>
          <h2>What keeps people coming back.</h2>
        </div>
        <div className="card-grid testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="card testimonial" key={testimonial.id}>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="person">
                {testimonial.name} | <span>{testimonial.role}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
