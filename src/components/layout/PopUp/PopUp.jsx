import './PopUp.scss';
import Modal from '../../shared/Modal';
import Card from './Card';
import { useEffect, useState } from 'react';
import useWindowHeight from '../../../hooks/useWindowHeight';
import Trigger from './Trigger';

export default function PopUp({ isMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldClearTimout, setShouldClearTimeout] = useState(false);
  const windowHeight = useWindowHeight();

  const closePopUp = () => setIsOpen(false);
  const openPopUp = () => setIsOpen(true);

  useEffect(() => {
    const timeout = setTimeout(openPopUp, 30000);

    if (shouldClearTimout) {
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [shouldClearTimout]);

  return (
    <>
      {isOpen ? (
        <Modal>
          <div className="popup" style={{ height: windowHeight }}>
            <div className="popup__backdrop"></div>
            <Card
              isMobile={isMobile}
              closePopUp={closePopUp}
              windowHeight={windowHeight}
            />
          </div>
        </Modal>
      ) : (
        <Modal>
          <Trigger
            onHover={() => {
              openPopUp();
              setShouldClearTimeout(true);
            }}
          />
        </Modal>
      )}
    </>
  );
}
