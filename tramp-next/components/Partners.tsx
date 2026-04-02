import React from "react";

export const Partners = () => {
  const logos = [
    "Bamboo_HR_logo__1_.png",
    "BNY_logo_2x.png",
    "Bolt_logo_2x.png",
    "Finn_logo_2x.png",
    "fonds-finanz_2x.png",
    "gojob_2x.png",
    "tally_2x.png"
  ];

  return (
    <section className="Section-module-scss-module__sX6ybW__Section Section-module-scss-module__sX6ybW__dark-solid dark-solid" data-testid="carousel-container">
      <div className="AnimatedSectionWrapper-module-scss-module__4Dy2TG__scroll">
        <div className="Carousel2025-module-scss-module__HCi1xW__Carousel2025_sliderContainer Carousel2025-module-scss-module__HCi1xW__Carousel2025_sliderContainer___withGradientEdges">
          <div className="Slider-module-scss-module__ZCi4oa__Slider_wrapper" data-testid="slider">
            <div className="Slider-module-scss-module__ZCi4oa__Slider">
              <div className="Slider-module-scss-module__ZCi4oa__Slider_container" style={{ display: "flex", gap: "2rem", justifyContent: "center", padding: "2rem 0" }}>
                {logos.map((logo, index) => (
                  <div key={index} className="Slider-module-scss-module__ZCi4oa__Slider_slide">
                    <img 
                      alt={logo} 
                      className="CarouselImage-module-scss-module__PG-W9W__CarouselImage_element___small" 
                      src={`/tramp_files/${logo}`}
                      style={{ opacity: 0.7, filter: "brightness(0) invert(1)" }} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
