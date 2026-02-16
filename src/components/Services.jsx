function Services() {
  return (
    <section className="bg-[#F4EFEA] py-20 px-6">
      <h2 className="text-center font-['Playfair_Display'] text-3xl text-[#1F3A37]">
        Therapy Services
      </h2>
      <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto text-[#1F3A37]">
        <div>
          <h3 className="text-xl font-semibold">Anxiety & Panic Therapy</h3>
          <p className="mt-4">Support for chronic worry, panic attacks, and overthinking.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Trauma & EMDR Therapy</h3>
          <p className="mt-4">EMDR and trauma-informed care for lasting healing.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Burnout & Perfectionism</h3>
          <p className="mt-4">Therapy for professionals experiencing exhaustion and stress.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
