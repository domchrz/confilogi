import './Layout.scss';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__wrapper">{children}</div>
    </div>
  );
}
