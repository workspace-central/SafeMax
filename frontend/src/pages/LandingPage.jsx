import Testimonials from "../components/Testimonials"
import WorldMap from "../components/WorldMap";
import FloatingComponent from "../components/FloatingComponent";
import Clients from "../components/Clients";

export default function LandingPage() {
  return (
  
        <section className="bg-[#FFFEFE]">
      <section className="bg-[#2e2f2e]">
          <div className="max-w-full mx-auto">
            <FloatingComponent>
            <WorldMap />
            </FloatingComponent>
          </div>
        </section>

        <section>
          <FloatingComponent>
          <Clients></Clients>
          </FloatingComponent>
        </section>
        
      <section>
        <FloatingComponent>
        <Testimonials/>
        </FloatingComponent>
      </section>
</section>
  );
}
