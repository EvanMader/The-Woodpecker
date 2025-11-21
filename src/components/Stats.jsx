const stats = [
  { label: 'Mon - Thu', value: '2pm - 2am' },
  { label: 'Fri - Sat', value: '2pm - 2:30am' },
  { label: 'Sunday', value: '12pm - 2am' },
];

export function Stats() {
  return (
    <section className="section stats" id="hours" aria-label="Bar hours">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Hours</p>
          <h2>Always open for the late crowd.</h2>
          <p>
            Whether it’s a weekday unwind or a weekend celebration, The Woodpecker is here when you need it. Last call 15 minutes to close.
          </p>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
