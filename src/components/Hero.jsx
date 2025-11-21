import { useEffect, useState } from 'react';
import barCenter from '../assets/BarCenter.jpeg';
import barLeft from '../assets/BarLeft.jpeg';
import barRight from '../assets/BarRight.jpeg';

const slides = [barCenter, barLeft, barRight];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % slides.length),
      5500,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-backdrop" aria-hidden="true">
        {slides.map((src, index) => (
          <div
            key={src}
            className={`hero-slide ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Your Evening, Elevated.</p>
          <h1>Late-night drinks, game-day vibes, and happy hour every day.</h1>
          <p>
            Welcome to The Woodpecker. The lights stay low, the wood bar stays warm, and the specials
            keep rolling.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#specials">
              See specials
            </a>
            <a className="btn btn-ghost" href="#hours">
              View hours
            </a>
          </div>
        </div>
        <div className="hero-card">
          <p>Tonight at The Woodpecker</p>
          <h3>Happy hour 2-6</h3>
          <p className="faded">$1 off everything and $2 Busch Light talls.</p>
          <p className="faded">Packerland pizza runs until close. Bring friends.</p>
        </div>
      </div>
    </section>
  );
}
