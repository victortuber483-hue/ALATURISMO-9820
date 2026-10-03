import { useReveal } from "../hooks/use-reveal";
import { Nav } from "../components/landing/nav";
import { Hero } from "../components/landing/hero";
import { Destinos } from "../components/landing/destinos";
import { BrasilMundo } from "../components/landing/brasil-mundo";
import { Experiencias } from "../components/landing/experiencias";
import { PorQue } from "../components/landing/porque";
import { Carrossel } from "../components/landing/carrossel";
import { Galeria } from "../components/landing/galeria";
import { ProvaSocial } from "../components/landing/prova-social";
import { Sobre } from "../components/landing/sobre";
import { CtaFinal } from "../components/landing/cta-final";
import { Footer, WhatsFloat } from "../components/landing/footer";

function Index() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Destinos />
        <BrasilMundo />
        <Experiencias />
        <PorQue />
        <Carrossel />
        <Galeria />
        <ProvaSocial />
        <Sobre />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsFloat />
    </>
  );
}

export default Index;
