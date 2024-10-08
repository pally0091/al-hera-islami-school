const Footer = () => {
  return (
    <footer>
      <div className="bg-accent">
        <p className="text-secondary">
          © {new Date().getFullYear()}{" "}
          <strong>Al Hera Intl School & Madrasha.</strong> All Rights Reserved.
          Developed by{" "}
          <span className="text-purple-200">
            <a
              href="https://github.com/pally0091"
              target="-blank"
            >
              R-Frontline
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
