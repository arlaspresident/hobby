import "./Footer.css";

type FooterProps = {
  developerName: string;
};

export function Footer({ developerName }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {year} – Built by {developerName}
      </p>
    </footer>
  );
}
