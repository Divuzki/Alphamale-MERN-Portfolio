import React from "react";
import random from "lodash/random";

function GalleryGrid() {
  // const [images, setImages] = React.useState([]);
  // React.useEffect(() => {
  //   fetch("https://picsum.photos/v2/list?page=2&limit=10")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const images = data.map((d) => ({
  //         url: d.download_url,
  //       }));
  //       setImages(images);
  //     });
  // }, []);
  return (
    // <!-- My work -->
    <div className="container mt-12 md:mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section className="w-full">
        <h2 id="work" className="secondary-title">
          My works
        </h2>
        <p className="section-paragraph">
          Here are some works shot by me
        </p>

        <div className="masonry sm:masonry-sm md:masonry-md">
            {/* {images.map((img, i) => {
              const randomHeight = random(250, 550);
              return (
                <div
                  key={i}
                  className="p-4 md:p-2 break-inside"
                  style={{ height: randomHeight }}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover md:rounded-lg" />
                </div>
              );
            })} */}
        </div>
      </section>
    </div>
  );
}

export default GalleryGrid;
