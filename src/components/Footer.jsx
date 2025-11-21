export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-meta">
          <p>&copy; {new Date().getFullYear()} The Woodpecker Bar</p>
          <a
            className="footer-designer"
            href="https://maderevan.com"
            target="_blank"
            rel="noreferrer"
          >
            Designed by Evan Mader
          </a>
        </div>
        <div className="footer-links">
          <a href="#specials">Specials</a>
          <a href="#hours">Hours</a>
          <a href="#bartenders">Bartenders</a>
        </div>
        <a
          className="footer-map"
          href="https://maps.app.goo.gl/isZGr7s5HeCNZJgaA"
          target="_blank"
          rel="noreferrer"
        >
          308 Main Ave, De Pere, WI 54115
        </a>
      </div>
    </footer>
  );
}
