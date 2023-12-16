import './Card.scss';
import CloseButton from '../Button';
import Button from '../../../shared/Button';
import CloseIcon from '../../../svgs/icons/Close';
import FeaturesTab3 from '../../../svgs/illustrations/FeaturesTab3';

export default function Card({ isMobile, closePopUp, windowHeight }) {
  return (
    <div className="popup__card">
      <CloseButton onClick={closePopUp}>
        <CloseIcon />
      </CloseButton>
      <div
        style={{ maxHeight: windowHeight - 140 }}
        className={`popup__card-content ${
          isMobile
            ? 'popup__card-content--mobile'
            : 'popup__card-content--desktop'
        }`}
      >
        <div className="popup__card-picture">
          <FeaturesTab3 width={isMobile ? '100%' : 'auto'} />
        </div>
        <div className="popup__card-text">
          <h3>Effortless sharing</h3>
          <div>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
          {!isMobile && <Button width="9rem">More info</Button>}
        </div>
      </div>
    </div>
  );
}
