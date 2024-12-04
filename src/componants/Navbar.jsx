// const navLinks = [
//     {
//         name: "Home",
//         path: "/",
//     },
//     {
//         name: "About",
//         path: "/about",
//     },
//     {
//         name: "Contact",
//         path: "/contact",
//     },
//     {
//         name: "Blog",
//         path: "/blog",
//     },
// ];

const DesktopNav = () => {
  return (
    <div>
      <h1>Desktop Navbar</h1>
    </div>
  );
};

const MobileNav = () => {
  return (
    <div>
      <h1>Mobile Navbar</h1>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
