import './Trigger.scss';

export default function Trigger({ onHover }) {
  return (
    <div className="popup__trigger" onMouseOver={onHover}>
      <p>Pop</p>
    </div>
  );
}
