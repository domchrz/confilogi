import { createPortal } from 'react-dom';
import './Modal.scss';

export default function Modal({ children, top = null }) {
  return createPortal(
    <div className="modal" style={{ top }}>
      {children}
    </div>,
    document.body
  );
}
