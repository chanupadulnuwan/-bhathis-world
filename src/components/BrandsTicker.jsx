import './BrandsTicker.css';

const brandLogos = [
  { name: 'Brand 1', src: '/images/brands/b8882fe2-e93d-4a7c-a918-52e461975c20.png' },
  { name: 'EE', src: '/images/brands/ee.png' },
  { name: 'Flashforge', src: '/images/brands/flashforge-logo.png' },
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
            <div key={idx} className="brands-ticker__item">
              <img
                src={brand.src}
                alt={brand.name}
                className="brands-ticker__logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsTicker;
