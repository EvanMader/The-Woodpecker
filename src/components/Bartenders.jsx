const crew = [
  {
    name: 'Riley',
    shift: 'Mon + Tue, 2pm - close',
    vibe: 'Keeps the jukebox on loud and knows every cheap beer by memory.',
    image:
      "linear-gradient(120deg, rgba(216,132,63,0.22), rgba(12,12,14,0.9)), url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80')",
  },
  {
    name: 'Mara',
    shift: 'Wed + Thu, 2pm - close',
    vibe: 'Craft/bottled soda recs and the fastest pour on the line.',
    image:
      "linear-gradient(120deg, rgba(216,132,63,0.22), rgba(12,12,14,0.9)), url('https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80')",
  },
  {
    name: 'Jay',
    shift: 'Fri, 2pm - 2:30am',
    vibe: 'Runs Packers trivia between plays and keeps the pizza orders stacked.',
    image:
      "linear-gradient(120deg, rgba(216,132,63,0.22), rgba(12,12,14,0.9)), url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80')",
  },
  {
    name: 'Casey',
    shift: 'Sat, 2pm - 2:30am',
    vibe: 'Shot caller on Sundays too; will remember your round by the second visit.',
    image:
      "linear-gradient(120deg, rgba(216,132,63,0.22), rgba(12,12,14,0.9)), url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80')",
  },
];

export function Bartenders() {
  return (
    <section className="section" id="bartenders">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Behind the bar</p>
          <h2>The crew behind the bar:</h2>
        </div>
        <div className="bartenders-grid">
          {crew.map((bartender) => (
            <article className="bartender-card" key={bartender.name}>
              <div
                className="bartender-photo"
                style={{ backgroundImage: bartender.image }}
                role="img"
                aria-label={`${bartender.name} - ${bartender.shift}`}
              />
              <div className="bartender-meta">
                <div className="bartender-top">
                  <h3>{bartender.name}</h3>
                  <span className="pill">{bartender.shift}</span>
                </div>
                <p>{bartender.vibe}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
