import Svg from '../../../../assets/illustrations/illustration-hero.svg';
import './Hero.scss';

export default function HeroPicture({ width = null }) {
  return (
    <picture className="picture-hero" aria-label="hero image">
      <Svg style={{ width }} />
    </picture>
  );
}
