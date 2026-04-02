import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="after2025redesign">
      <div className="PageLayout-module-scss-module__aOwoqa__PageLayout PageLayout-module-scss-module__aOwoqa__PageLayout___withNotificationBar" role="none">
        <div className="hero-bg"></div>
        <Header />
        <main className="PageLayout-module-scss-module__aOwoqa__PageLayout_content">
          <div>
            <Hero />
            <Partners />
            <Features />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
