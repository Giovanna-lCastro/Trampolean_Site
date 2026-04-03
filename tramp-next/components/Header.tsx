import React from "react";

export const Header = () => {
  return (
    <header className="Header-module-scss-module__6uf8Pa__Header Header-module-scss-module__6uf8Pa__Header___transparent">
      <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between", padding: "0 2rem" }}>
        <a aria-label="Home" data-testid="header-logo" className="Header-module-scss-module__6uf8Pa__Logo Header-module-scss-module__6uf8Pa__Logo___whiteLogo" data-role="Nav:TopLink" data-cta="Logo" href="/">
          <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white", letterSpacing: "-0.5px" }}>Trampolean</span>
        </a>
        
        <nav className="Header-module-scss-module__6uf8Pa__Header_navigation" style={{ display: "block" }}>
          <ul role="menu" className="Header-module-scss-module__6uf8Pa__Header_navigationList" style={{ gap: "1.5rem" }}>
            <li role="menuitem"><a href="/" className="TopLevelNavigationLink-module-scss-module__CTa3nG__TopLevelNavigationLink_label" style={{ color: "white" }}>Início</a></li>
            <li role="menuitem"><a href="/sobre" className="TopLevelNavigationLink-module-scss-module__CTa3nG__TopLevelNavigationLink_label" style={{ color: "white" }}>Sobre Nós</a></li>
            <li role="menuitem"><a href="#solucoes" className="TopLevelNavigationLink-module-scss-module__CTa3nG__TopLevelNavigationLink_label" style={{ color: "white" }}>Soluções</a></li>
            <li role="menuitem"><a href="/inovacao" className="TopLevelNavigationLink-module-scss-module__CTa3nG__TopLevelNavigationLink_label" style={{ color: "white" }}>Inovação</a></li>
            <li role="menuitem"><a href="/ergonomia" className="TopLevelNavigationLink-module-scss-module__CTa3nG__TopLevelNavigationLink_label" style={{ color: "white" }}>Ergonomia & SST</a></li>
            <li role="menuitem"><a href="/portfolio" className="TopLevelNavigationLink-module-scss-module__CTa3nG__TopLevelNavigationLink_label" style={{ color: "white" }}>Portfólio</a></li>
            <li role="menuitem"><a href="/blog" className="TopLevelNavigationLink-module-scss-module__CTa3nG__TopLevelNavigationLink_label" style={{ color: "white" }}>Blog</a></li>
            <li role="menuitem"><a href="/contato" className="TopLevelNavigationLink-module-scss-module__CTa3nG__TopLevelNavigationLink_label" style={{ color: "white" }}>Contato</a></li>
          </ul>
        </nav>

        <div className="Header-module-scss-module__6uf8Pa__Header_rightNavigationLinks Header-module-scss-module__6uf8Pa__Header_rightNavigationLinks___outsideMobileMenu">
          <a className="DeprecatedButtonLink-module-scss-module__COBl4G__Button DeprecatedButtonLink-module-scss-module__COBl4G__override text DeprecatedButtonLink-module-scss-module__COBl4G__white-solid Header-module-scss-module__6uf8Pa__Header_rightLink___light Header-module-scss-module__6uf8Pa__Header_rightLink___textLink DeprecatedButtonLink-module-scss-module__COBl4G__secondary" data-cta="Contact Sales" data-role="Nav:TopLink" href="/contato">Talk to sales</a>
          <a className="DeprecatedButtonLink-module-scss-module__COBl4G__Button DeprecatedButtonLink-module-scss-module__COBl4G__override filled Header-module-scss-module__6uf8Pa__Header_rightLink___light DeprecatedButtonLink-module-scss-module__COBl4G__magenta-button" style={{ backgroundColor: "#2E86AB" }} data-cta="TopNav" data-role="SignUp" href="#cta-final">Agende uma Demonstração</a>
        </div>
      </div>
    </header>
  );
};
