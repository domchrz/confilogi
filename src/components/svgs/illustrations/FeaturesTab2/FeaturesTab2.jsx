import Svg from '../../../../assets/illustrations/illustration-features-tab-2.svg';
import './FeaturesTab2.scss';

export default function FeaturesTab2({ width = null }) {
  return (
    <picture className="picture-features-tab-2" aria-label="feature image">
      <Svg style={{ width }} />
    </picture>
  );
}
