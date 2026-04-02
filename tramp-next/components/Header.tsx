import React from "react";

export const Header = () => {
  return (
    <header className="Header-module-scss-module__6uf8Pa__Header Header-module-scss-module__6uf8Pa__Header___transparent">
      <a aria-label="Home" data-testid="header-logo" className="Header-module-scss-module__6uf8Pa__Logo Header-module-scss-module__6uf8Pa__Logo___whiteLogo" data-role="Nav:TopLink" data-cta="Logo" href="https://www.make.com/en">
        <img alt="Make Logo" loading="lazy" width="2462" height="870" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="/tramp_files/Make-Logo-RGB_(2).png" />
      </a>
      <div className="Header-module-scss-module__6uf8Pa__Header_rightNavigationLinks Header-module-scss-module__6uf8Pa__Header_rightNavigationLinks___outsideMobileMenu">
        <a className="DeprecatedButtonLink-module-scss-module__COBl4G__Button DeprecatedButtonLink-module-scss-module__COBl4G__override text DeprecatedButtonLink-module-scss-module__COBl4G__white-solid Header-module-scss-module__6uf8Pa__Header_rightLink___light Header-module-scss-module__6uf8Pa__Header_rightLink___textLink DeprecatedButtonLink-module-scss-module__COBl4G__secondary" data-cta="Contact Sales" data-role="Nav:TopLink" href="https://www.make.com/en/talk-to-sales">Talk to sales</a>
        <a className="DeprecatedButtonLink-module-scss-module__COBl4G__Button DeprecatedButtonLink-module-scss-module__COBl4G__override outline DeprecatedButtonLink-module-scss-module__COBl4G__dark Header-module-scss-module__6uf8Pa__Header_rightLink___light" data-cta="SignIn" data-role="Nav:TopLink" href="https://www.make.com/en/login">Log in</a>
        <a className="DeprecatedButtonLink-module-scss-module__COBl4G__Button DeprecatedButtonLink-module-scss-module__COBl4G__override filled Header-module-scss-module__6uf8Pa__Header_rightLink___light DeprecatedButtonLink-module-scss-module__COBl4G__magenta-button" data-cta="TopNav" data-role="SignUp" href="https://www.make.com/en/register">Get started free</a>
      </div>
      {/* Menu mobile toggle e navegação principal simplificados para manter fidelidade visual inicial */}
      <div className="Header-module-scss-module__6uf8Pa__Header_mobileNavToggle" aria-label="Open main menu">
        <svg role="none" width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 28C0 12.536 12.536 0 28 0V0C43.464 0 56 12.536 56 28V28C56 43.464 43.464 56 28 56V56C12.536 56 0 43.464 0 28V28Z" fill="currentColor"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M27.9092 21.3636H21.3638V27.9091H27.9092V21.3636ZM27.9092 30.0909H21.3638V36.6364H27.9092V30.0909ZM28.8931 32.1657L34.5616 28.8929L37.8343 34.5615L32.1658 37.8342L28.8931 32.1657ZM36.6365 21.3636H30.091V27.9091H36.6365V21.3636Z" fill="white"></path>
        </svg>
      </div>
    </header>
  );
};
