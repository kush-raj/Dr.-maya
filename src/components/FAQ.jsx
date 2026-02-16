function FAQ() {
  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24
    ">
      <div className="max-w-[900px] mx-auto px-6">

        <h2 className="text-center font-['Playfair_Display'] text-[42px] text-[#1F3A37]">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-10 text-[#1F3A37]">

          <div>
            <h3 className="text-xl font-semibold">
              Do you offer in-person therapy in Santa Monica?
            </h3>
            <p className="mt-3 leading-relaxed">
              Yes. I provide in-person therapy at my private Santa Monica office
              located at 123th Street 45 W, Santa Monica, CA 90401.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Do you offer online therapy in California?
            </h3>
            <p className="mt-3 leading-relaxed">
              I offer secure telehealth therapy for clients located anywhere in California.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              What approaches do you use in therapy?
            </h3>
            <p className="mt-3 leading-relaxed">
              My work integrates Cognitive Behavioral Therapy (CBT), EMDR,
              mindfulness-based practices, and body-oriented techniques to support
              both emotional insight and nervous system regulation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;
