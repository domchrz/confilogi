import Svg from '../../../../assets/icons/icon-arrow.svg';
import './Arrow.scss';

export default function AlertIcon({ isActive = false }) {
  return (
    <i
      className={`icon-arrow ${isActive ? 'icon-arrow--active' : ''}`}
      aria-label="arrow-icon"
    >
      <Svg />
    </i>
  );
}
