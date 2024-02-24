export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center p-4">
      <p className="footer-text">&#9400; Copyright {year} Wealth Health</p>
    </footer>
  );
};
