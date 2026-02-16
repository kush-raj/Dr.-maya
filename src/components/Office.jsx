import office1 from "../assets/office1.jpeg";
import office2 from "../assets/office2.jpeg";

function Office() {
  return (
    <section className="bg-[#F4EFEA] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-center font-['Playfair_Display'] text-[42px] text-[#1F3A37]">
          A Calm Space for Healing
        </h2>

        <p className="text-center mt-6 max-w-2xl mx-auto text-[#1F3A37]">
          Located at 123th Street 45 W, Santa Monica, CA 90401,
          the office is a quiet, private space designed to feel calm and grounding,
          with natural light and a comfortable environment.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <img src={office1} className="rounded-2xl shadow-lg" alt="Santa Monica therapy office" />
          <img src={office2} className="rounded-2xl shadow-lg" alt="Dr. Maya Reynolds office interior" />
        </div>

      </div>
    </section>
  );
}

export default Office;
