// Shape shared by every language file (pt.ts, en.ts, es.ts, zh.ts).
// Adding a key here without adding it to all four language files is a
// TypeScript error by design — that's the safety net for a one-time,
// whole-site translation.

export interface MegaMenuEntry {
  title: string;
  description: string;
}

export interface Dictionary {
  header: {
    nav: {
      home: string;
      about: string;
      solutions: string;
      education: string;
      products: string;
      career: string;
    };
    solutionsMenu: [MegaMenuEntry, MegaMenuEntry, MegaMenuEntry, MegaMenuEntry, MegaMenuEntry];
    solutionsMenuFooter: string;
    educationMenu: [MegaMenuEntry, MegaMenuEntry, MegaMenuEntry, MegaMenuEntry];
    educationMenuFooter: string;
    productsMenu: [MegaMenuEntry, MegaMenuEntry, MegaMenuEntry, MegaMenuEntry];
    productsMenuFooter: string;
    contact: string;
    email: string;
    whatsapp: string;
    whatsappCta: string;
    openMenu: string;
    closeMenu: string;
  };
}
