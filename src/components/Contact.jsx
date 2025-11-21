export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Visit</p>
          <h2>Slide in tonight or drop a note to hold a table.</h2>
          <ul className="contact-list">
            <li>
              <span>Happy hour</span>
              <p>2pm - 6pm daily with $1 Pabst, $3 Stella, and $1 off everything.</p>
            </li>
            <li>
              <span>Game days</span>
              <p>Free food and games rolling during every Packers game.</p>
            </li>
            <li>
              <span>Sunday perk</span>
              <p>Show your operator&apos;s license and your first shot is on us.</p>
            </li>
          </ul>
        </div>
        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Jane Smith" />
          </label>
          <label>
            Night and time
            <input type="text" name="night" placeholder="Friday at 9pm" />
          </label>
          <label>
            Group size
            <input type="text" name="groupSize" placeholder="6 people" />
          </label>
          <label>
            Notes
            <textarea
              name="message"
              rows="4"
              placeholder="Celebration details, pizza count, or any accessibility needs."
            />
          </label>
          <button className="btn" type="submit">
            Hold my spot
          </button>
        </form>
      </div>
    </section>
  );
}
