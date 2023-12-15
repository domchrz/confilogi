import './Searching.scss';
import { FeaturesTab2 } from '../../../svgs/illustrations';
import Button from '../../../shared/Button';

export default function Searching({ isMobile }) {
  return (
    <div className={`searching searching--${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="searching__tab-picture">
        <FeaturesTab2 width={isMobile ? '100%' : 'auto'} />
      </div>
      <div className="searching__content">
        <div className="searching__content-card">
          <h2>Searching at lightspeed</h2>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias beatae impedit distinctio maxime illum. Quos assumenda
              vero quo dolorem, debitis ullam tenetur minima. Temporibus saepe
              repudiandae ratione, voluptas sit nesciunt.
            </p>
          </div>
          {!isMobile && <Button width="9rem">More info</Button>}
        </div>
      </div>
    </div>
  );
}
