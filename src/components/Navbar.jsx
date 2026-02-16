function Navbar() {
  return (
    <nav className="bg-[#FAF8F5] px-6 py-6 flex justify-between items-center">
      <h1 className="font-['Playfair_Display'] text-2xl text-[#1F3A37] font-semibold">
        Dr. Maya Reynolds, PsyD
      </h1>
      <div className="hidden md:flex gap-8 text-[#1F3A37]">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
