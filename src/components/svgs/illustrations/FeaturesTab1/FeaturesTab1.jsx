import Svg from '../../../../assets/illustrations/illustration-features-tab-1.svg';
import './FeaturesTab1.scss';

export default function FeaturesTab1({ width = null }) {
  return (
    <picture className="picture-features-tab-1" aria-label="feature image">
      <Svg style={{ width }} />
    </picture>
  );
}
