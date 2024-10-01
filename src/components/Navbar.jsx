const NavLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-20 h-20"
        src="/Logo.png"
        alt="Al Hera Logo"
      />
      <div className="text-left">
        <h1>Al Hera International Madrasah</h1>
        <h3 className="hidden md:block">আল হেরা ইন্টারন্যাশনাল মাদ্রাসা</h3>
      </div>
    </div>
  );
};
const Navbar = () => {
  return (
    <nav className="p-5 bg-[#2d8c7c] bg-opacity-50 w-full justify-between items-center sticky top-0 backdrop-blur-md">
      <NavLogo />
    </nav>
  );
};

export default Navbar;
