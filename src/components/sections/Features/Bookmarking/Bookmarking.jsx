import './Bookmarking.scss';
import { FeaturesTab1 } from '../../../svgs/illustrations';
import Button from '../../../shared/Button';

export default function Bookmarking({ isMobile }) {
  return (
    <div
      className={`bookmarking bookmarking--${isMobile ? 'mobile' : 'desktop'}`}
    >
      <div className="bookmarking__tab-picture">
        <FeaturesTab1 width={isMobile ? '100%' : 'auto'} />
      </div>
      <div className="bookmarking__content">
        <div className="bookmarking__content-card">
          <h2>Bookmark in one click</h2>
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
