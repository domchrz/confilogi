import './Button.scss';
import ArrowIcon from '../../../svgs/icons/Arrow';

export default function Button({ isActive = false, onClick, ...props }) {
  return (
    <button className="faq__btn" {...props} onClick={onClick}>
      <ArrowIcon isActive={isActive} />
    </button>
  );
}
