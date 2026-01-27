import "./Header.css";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title">{title}</h1>

        <div className="banner" role="img" aria-label="Banner image"></div>
      </div>
    </header>
  );
}
