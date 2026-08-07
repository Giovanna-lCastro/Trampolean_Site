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
    login: string;
    email: string;
    whatsapp: string;
    whatsappCta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: [string, string];
    ctaPrimary: string;
    ctaSecondary: string;
    stats: [string, string, string];
  };
  competenceStrip: {
    items: [string, string, string, string, string];
  };
  problemSection: {
    eyebrow: string;
    title: string;
    paragraph: string;
    deckEyebrow: string;
    deckIntro: string;
    downloadLabel: string;
    prevLabel: string;
    nextLabel: string;
    goToItemLabel: string;
    deck: [
      { tag: string; title: string; description: string },
      { tag: string; title: string; description: string },
      { tag: string; title: string; description: string },
      { tag: string; title: string; description: string },
      { tag: string; title: string; description: string },
      { tag: string; title: string; description: string }
    ];
  };
  pressSection: {
    badge: string;
    title: string;
    articles: [
      { source: string; title: string; paragraph: string; imageAlt: string },
      { source: string; title: string; paragraph: string; imageAlt: string },
      { source: string; title: string; paragraph: string; imageAlt: string }
    ];
  };
  resultsSection: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    stats: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string }
    ];
  };
  partners: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
  };
  features: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    paragraph: string;
    quote: string;
    imageAlt: string;
    pillars: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string }
    ];
  };
  solutions: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    defaultButtonText: string;
    items: [
      { title: string; subtitle: string; description: string; items: string[]; buttonText?: string },
      { title: string; subtitle: string; description: string; items: string[]; buttonText?: string },
      { title: string; subtitle: string; description: string; items: string[]; buttonText?: string },
      { title: string; subtitle: string; description: string; items: string[]; buttonText?: string },
      { title: string; subtitle: string; description: string; items: string[]; buttonText?: string }
    ];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: [
      { question: string; answer: string },
      { question: string; answer: string },
      { question: string; answer: string },
      { question: string; answer: string },
      { question: string; answer: string },
      { question: string; answer: string },
      { question: string; answer: string }
    ];
  };
  differential: {
    eyebrow: string;
    title: string;
    paragraph: string;
    pillars: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string }
    ];
  };
  finalCTA: {
    titleBefore: string;
    titleHighlight: string;
    paragraph: string;
    ctaLabel: string;
  };
  footer: {
    tagline: string;
    navHeading: string;
    nav: {
      about: string;
      solutions: string;
      education: string;
      products: string;
      career: string;
      contact: string;
    };
    contactHeading: string;
    address: string;
    copyright: string;
    privacyPolicy: string;
  };
  aboutHero: {
    eyebrow: string;
    title: string;
    paragraph: string;
    ctaLabel: string;
    imageAlt: string;
    badgeLine1: string;
    badgeHighlight: string;
  };
  aboutStory: {
    eyebrow: string;
    title: string;
    paragraphs: [string, string, string];
  };
  aboutValues: {
    eyebrow: string;
    title: string;
    items: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string }
    ];
  };
  aboutDifferentiators: {
    eyebrow: string;
    title: string;
    pillars: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string }
    ];
  };
  aboutLeadership: {
    eyebrow: string;
    title: string;
    paragraph: string;
    jobTitle: string;
    imageAlt: string;
    ctaLabel: string;
  };
  aboutMetrics: {
    eyebrow: string;
    title: string;
    items: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string }
    ];
  };
  aboutCTA: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    buttonLabel: string;
  };
  careerHero: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    paragraph: string;
    ctaLabel: string;
    imageAlt: string;
    badgeLine1: string;
    badgeHighlight: string;
  };
  careerCulture: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    paragraph: string;
    values: [
      { title: string },
      { title: string },
      { title: string },
      { title: string }
    ];
    jobsEyebrow: string;
    jobsTitle: string;
    jobs: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string }
    ];
  };
  careerForm: {
    eyebrow: string;
    title: string;
    paragraph: string;
    spontaneousTitle: string;
    spontaneousButton: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    areaLabel: string;
    areaPlaceholder: string;
    areaOptions: [string, string, string, string, string];
    portfolioLabel: string;
    portfolioPlaceholder: string;
    aboutLabel: string;
    aboutPlaceholder: string;
    submitButton: string;
    sentMessage: string;
    emailSubject: string;
    emailBodyLabels: {
      name: string;
      email: string;
      whatsapp: string;
      area: string;
      portfolio: string;
    };
  };
  solutionsHero: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    paragraph: string;
    imageAlt: string;
    badgeLine1: string;
    badgeHighlight: string;
  };
  solutionsDetail: {
    ctaLabel: string;
    items: [
      { tag: string; title: string; description: string; itemsLabel: string; items: string[] },
      { tag: string; title: string; description: string; itemsLabel: string; items: string[] },
      { tag: string; title: string; description: string; itemsLabel: string; items: string[] },
      { tag: string; title: string; description: string; itemsLabel: string; items: string[] },
      { tag: string; title: string; description: string; itemsLabel: string; items: string[] }
    ];
  };
  educationHero: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    paragraph: string;
    imageAlt: string;
    badgeLine1: string;
    badgeHighlight: string;
  };
  educationDetail: {
    forWhomLabel: string;
    ctaLabel: string;
    items: [
      { tag: string; title: string; description: string; forWhom: string },
      { tag: string; title: string; description: string; forWhom: string },
      { tag: string; title: string; description: string; forWhom: string },
      { tag: string; title: string; description: string; forWhom: string },
      { tag: string; title: string; description: string; forWhom: string }
    ];
  };
  educationDifferentiators: {
    eyebrow: string;
    title: string;
    items: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string }
    ];
  };
  productsHero: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    paragraph: string;
    imageAlt: string;
    badgeLine1: string;
    badgeHighlight: string;
  };
  productDetail: {
    ctaLabel: string;
    downloadLabel: string;
    unityStoreLabel: string;
    climateDownloadLabel: string;
    items: [
      { tag: string; title: string; description: string; fullDescription: string; benefits: string[] },
      { tag: string; title: string; description: string; fullDescription: string; benefits: string[] },
      { tag: string; title: string; description: string; fullDescription: string; benefits: string[] },
      { tag: string; title: string; description: string; fullDescription: string; benefits: string[] }
    ];
  };
  segments: {
    titleLine1: string;
    titleLine2Before: string;
    titleHighlight: string;
    subtitle: string;
    ctaLabel: string;
    items: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string }
    ];
  };
  contactHero: {
    eyebrow: string;
    title: string;
    paragraph: string;
    imageAlt: string;
    badgeLine1: string;
    badgeHighlight: string;
  };
  contactContent: {
    headingLine1: string;
    headingHighlight: string;
    emailLabel: string;
    whatsappLabel: string;
    locationLabel: string;
    locationValue: string;
    locationSub: string;
    followLabel: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    subjectOptions: [string, string, string, string, string, string, string, string, string, string];
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    sentMessage: string;
    defaultSubject: string;
    emailBodyLabels: { name: string; email: string };
  };
  ebookCTA: {
    badge: string;
    title: string;
    paragraph: string;
    buttonLabel: string;
    pageImageAlt: string;
    coverImageAlt: string;
  };
  privacyPage: {
    title: string;
    lastUpdated: string;
    intro: { heading: string; paragraphs: string[] };
    dataCollected: { heading: string; intro: string; items: string[] };
    dataUse: { heading: string; intro: string; items: string[] };
    dataSharing: { heading: string; intro: string; items: string[] };
    dataRetention: { heading: string; paragraph: string };
    dataSecurity: { heading: string; paragraph: string };
    rights: { heading: string; intro: string; items: string[]; beforeEmail: string; afterEmail: string };
    children: { heading: string; paragraph: string };
    thirdPartyLinks: { heading: string; paragraph: string };
    internationalTransfer: { heading: string; paragraph: string };
    changes: { heading: string; paragraph: string };
    contact: { heading: string; beforeEmail: string; betweenEmailAndWhatsapp: string; afterWhatsapp: string };
  };
  solutionsPage: {
    introTitle: string;
    introQuote: string;
    ctaTitle: string;
    ctaParagraph: string;
    ctaButton: string;
  };
  educationPage: {
    introTitle: string;
    introQuote: string;
    ctaTitle: string;
    ctaButton: string;
  };
  productsPage: {
    introTitle: string;
    introQuote: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  aboutPage: {
    ctaTitleLine1: string;
    ctaTitleLine2: string;
    ctaDescription: string;
    ctaButton: string;
  };
}
