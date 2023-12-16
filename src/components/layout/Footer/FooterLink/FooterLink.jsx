import './FooterLink.scss';

export default function FooterLink({
  children,
  onClick = () => {},
  href = '',
}) {
  return (
    <a
      className="footer__link"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      href={href}
    >
      {children}
    </a>
  );
}
