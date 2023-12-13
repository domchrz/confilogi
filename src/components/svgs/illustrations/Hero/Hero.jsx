import Svg from '../../../../assets/illustrations/illustration-hero.svg';
import './Hero.scss';

export default function HeroPicture() {
  return (
    <picture className="picture-hero" aria-label="hero image">
      <Svg />
    </picture>
  );
}
