const navItems = [
  { href: '#specials', label: 'Specials' },
  { href: '#hours', label: 'Hours' },
  { href: '#bartenders', label: 'Bartenders' },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#">
          <span>The Woodpecker</span>
          <small>Local bar on Main Avenue, De Pere</small>
        </a>
        <nav aria-label="Primary navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="header-location"
          href="https://maps.app.goo.gl/isZGr7s5HeCNZJgaA"
          target="_blank"
          rel="noreferrer"
        >
          308 Main Ave, De Pere, WI 54115
        </a>
      </div>
    </header>
  );
}
