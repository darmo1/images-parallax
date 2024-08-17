import Image from "next/image";
import { ParallaxCarouselLeftToRight } from "./_components/ParallaxCarouselLeftToRight";
import { ParallaxCarouselRightToLeft } from "./_components/ParallaxCarouelRightToLeft";

export default function Home() {
  let images1 = [];
  let images2 = [];
  let images3 = [];
  let images4 = [];

  for (let i = 1; i <= 7; i++) {
    const src = `/${i}.jpg`;
    images1.push({ src });
  }

  for (let i = 7; i <= 14; i++) {
    const src = `/${i}.jpg`;
    images2.push({ src });
  }

  for (let i = 14; i <= 21; i++) {
    const src = `/${i}.jpg`;
    images3.push({ src });
  }

  for (let i = 21; i <= 29; i++) {
    const src = `/${i}.jpg`;
    images4.push({ src });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ParallaxCarouselLeftToRight images={images1} />
      <ParallaxCarouselLeftToRight images={images3} />
      <ParallaxCarouselRightToLeft images={images2} />
      <ParallaxCarouselRightToLeft images={images4} />
      <hr className="border-gray-400" />
      <br className="border" />
      <div className="mb-32 grid place-content-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <h2 className="mb-3 text-2xl font-semibold">
          ¿Quieres ser más que mi vínculo?, Mi novia 😍
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            😍
          </span>
        </h2>
      </div>
    </main>
  );
}
