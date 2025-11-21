import { services } from '../data/services.js';

export function Services() {
  return (
    <section className="section" id="specials">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Specials</p>
          <h2>From open to last call, the board stays full.</h2>
          <p>Signature deals, happy hour standbys, and late-night bites built for you.</p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="card" key={service.id}>
              <span className="card-icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
