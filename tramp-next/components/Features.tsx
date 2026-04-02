import React from "react";

export const Features = () => {
  const cards = [
    {
      title: "Build and ship fast, be first",
      description: "Whatever you want to automate, Make gets you moving. Visually design solutions without code to save time.",
      icon: "IconWrapper__1_.svg"
    },
    {
      title: "Solve smarter, boost efficiency",
      description: "When complexity grows, Make lets you customize automations and plug in AI apps for better, faster results.",
      icon: "IconWrapper__5_.png"
    },
    {
      title: "Orchestrate with clarity and control",
      description: "As you think bigger, you can create autonomous AI agents and manage everything with a real-time visual map.",
      icon: "IconWrapper__6_.png"
    }
  ];

  return (
    <section className="Section-module-scss-module__sX6ybW__Section Section-module-scss-module__sX6ybW__white-solid white-solid Section-module-scss-module__sX6ybW__Section___dynamicHeight" id="section_01" style={{ color: "#220041" }}>
      <div className="container2025Redesign ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_grid ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_gridCol___1 ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_gridGap___large">
        <div data-testid="contentGridItem" className="ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_item">
          <div className="ContentBlock2025-module-scss-module__jZhQ6q__ContentBlock ContentBlock2025-module-scss-module__jZhQ6q__ContentBlock_container" style={{ color: "#220041" }}>
            <h2 className="ContentBlock2025-module-scss-module__jZhQ6q__ContentBlock_title Alignment-module-scss-module__CdTCxq__Alignment___center">
              <span className="ContentBlock2025-module-scss-module__jZhQ6q__ContentBlock_titleText">Automate business processes with confidence</span>
            </h2>
            <div className="ContentBlock2025-module-scss-module__jZhQ6q__ContentBlock_description Alignment-module-scss-module__CdTCxq__Alignment___center">
              <p>From a simple workflow, to managing AI automation systems across your entire business, make it happen with Make.</p>
            </div>
          </div>
        </div>
        <div data-testid="contentGridItem" className="ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_item">
          <div className="ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_flex ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_flexCol___3 ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_flexGap___small">
            {cards.map((card, index) => (
              <div key={index} className="ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_item">
                <div className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard">
                  <div className="Card2025-module-scss-module__COW6xW__Card2025">
                    <div className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard_container ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard_container___horizontal">
                      <div className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard_imageWrapper Alignment-module-scss-module__CdTCxq__Alignment___left">
                        <img alt={card.title} loading="lazy" width="64" height="64" className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard_image" src={`/tramp_files/${card.icon}`} />
                      </div>
                      <div className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard_content Alignment-module-scss-module__CdTCxq__Alignment___left">
                        <div className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard_title"><span>{card.title}</span></div>
                        <div className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard_description"><p>{card.description}</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
