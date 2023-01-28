import React, { useRef, useState } from "react";
import useIntersectionObserver from "../context/useIntersectionObserver";
import style from "../../styles/loader.module.css";

export default function CustomImage({ img, alt, style }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });

  return (
    <div
      ref={ref}
      className={`relative ${style ? style : "w-full h-full"}  overflow-hidden`}
    >
      {isVisible && <Image alt={alt} img={img} />}
    </div>
  );
}

const Image = ({ img, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <div
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
        className={`${style.loading} ${style.thumb} ${style.image}`}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        style={{ opacity: isLoaded ? 1 : 0 }}
        loading="lazy"
        src={img}
        alt={alt}
        className={`${style.image} object-cover ${style.full}`}
      />
    </>
  );
};
