import './Gallery.css';

const galleryImages = [
  '/images/about/gallery5.jpg',
  '/images/about/gallery7.jpg',
  '/images/about/gallery2.jpg',
  '/images/about/gallery3.jpg',
  '/images/about/gallery1.jpg',
  '/images/about/gallery4.jpg',
  '/images/about/gallery6.jpg',
  '/images/projects/pr1/gallery1.jpg',
  '/images/projects/pr1/gallery2.jpg',
  '/images/projects/pr1/gallery3.jpg',
  '/images/projects/pr1/gallery4.jpg',
  '/images/projects/pr1/gallery5.jpg',
  '/images/projects/pr1/gallery6.jpg',
  '/images/projects/pr1/gallery7.jpg',
];

function Gallery() {
  return (
    <main className="gallery-page">
      <h1 className="gallery-heading">Gallery</h1>
      <div className="gallery-masonry">
        {galleryImages.map((src, index) => (
          <div key={index} className="gallery-masonry-item">
            <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Gallery;
