import "./Footer.css";

type FooterProps = {
  developerName: string;
};

export function Footer({ developerName }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
      <p className="footer-text">
        © {year} – Utvecklad av {developerName}
      </p>
    </footer>
  );
}
