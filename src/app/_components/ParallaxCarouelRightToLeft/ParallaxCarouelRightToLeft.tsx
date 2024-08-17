import React from 'react';

type ImagesProps = {
  images: { src: string }[]
}
 
export const ParallaxCarouselRightToLeft = ({ images }: ImagesProps ) => {
  return (
    <div className="overflow-hidden relative w-full h-72 my-6">
      <div className="flex animate-scrollRightToLeft">
        {images.map(({ src }, index) => (
          <div key={index} className="w-[320px] h-[320px] object-cover relative mx-12 rounded-xl">
            <img
              src={src}
              alt={`Carousel item ${index + 1}`}
              className="w-full h-full object-cover animate-parallaxRightToLeft rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


