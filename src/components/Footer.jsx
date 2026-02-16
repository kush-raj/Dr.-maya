function Footer() {
  return (
    <footer className="bg-[#1F3A37] text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="font-['Playfair_Display'] text-2xl">
            Dr. Maya Reynolds, PsyD
          </h3>
          <p className="mt-4 text-sm opacity-80">
            Licensed Clinical Psychologist
            <br />
            Santa Monica, California
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Office Location</h4>
          <p className="text-sm opacity-80">
            123th Street 45 W <br />
            Santa Monica, CA 90401
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <p className="text-sm opacity-80">
            Anxiety Therapy <br />
            Trauma & EMDR <br />
            Burnout Counseling
          </p>
        </div>

      </div>

      <div className="text-center text-sm mt-12 opacity-60">
        © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
