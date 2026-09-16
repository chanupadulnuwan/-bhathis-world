import './BrandsTicker.css';

const brandLogos = [
  {
    name: 'TORRAS',
    src: '/images/brands/b8882fe2-e93d-4a7c-a918-52e461975c20.png',
    url: 'https://torraslife.com/',
  },
  {
    name: 'edelkrone',
    src: '/images/brands/ee.png',
    url: 'https://edelkrone.com/',
  },
  {
    name: 'Flashforge',
    src: '/images/brands/flashforge-logo.png',
    url: 'https://www.flashforge.com/',
  },
];

function BrandsTicker() {
  // Duplicate logos multiple times for smooth infinite rolling
  const repeatedLogos = [
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
  ];

  return (
    <section className="brands-ticker" aria-label="Brand Collaborations">
      <h2 className="brands-ticker__title">Brand Collaborations</h2>
      <div className="brands-ticker__slider">
        <div className="brands-ticker__track">
          {repeatedLogos.map((brand, idx) => (
            <a
              key={idx}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="brands-ticker__item"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="brands-ticker__logo"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsTicker;
