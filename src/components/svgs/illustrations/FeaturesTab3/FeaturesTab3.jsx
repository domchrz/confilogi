import Svg from '../../../../assets/illustrations/illustration-features-tab-3.svg';
import './FeaturesTab3.scss';

export default function FeaturesTab3({ width = null }) {
  return (
    <picture className="picture-features-tab-3" aria-label="feature image">
      <Svg style={{ width }} />
    </picture>
  );
}
