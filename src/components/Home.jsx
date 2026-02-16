import hero from "../assets/maya-hero.png";

function Home() {
  return (
    <section className="bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24">

        <div className="flex flex-col lg:flex-row items-center gap-16">

          
          <div className="w-full lg:w-1/2">
            <div className="rounded-[40px] overflow-hidden shadow-xl">
              <img
                src={hero}
                alt="Dr. Maya Reynolds, PsyD - Santa Monica Therapist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            <h1 className="font-['Playfair_Display'] text-[40px] sm:text-[56px] lg:text-[64px] leading-tight text-[#1F3A37]">
              Anxiety & Trauma Therapy in Santa Monica, CA
            </h1>

            <p className="mt-6 text-lg text-[#1F3A37] font-['Inter'] leading-relaxed">
              Therapy for adults who feel overwhelmed by anxiety, burnout, or the lingering effects of past experiences.
              Work with a licensed clinical psychologist in Santa Monica who combines practical tools with depth-oriented care.
            </p>

            <div className="mt-10">
              <button className="px-8 py-4 bg-[#1F3A37] text-white font-medium uppercase tracking-wide hover:bg-[#C97B63] transition-all duration-500">
                Schedule a Consultation
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
