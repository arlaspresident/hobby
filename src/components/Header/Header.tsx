import "./Header.css";
import bannerImg from "../../assets/yoga.jpg";

//props typ för header
type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title">{title}</h1>

        <img
          className="banner"
          src={bannerImg}
          alt="Bannerbild för webbplatsen"
        />
      </div>
    </header>
  );
}
