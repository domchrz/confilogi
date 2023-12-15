import './Newsletter.scss';
import useCountdown from '../../../hooks/useCountdown';
import Observer from './Observer';
import Form from './Form';

export default function Newsletter({ isMobile }) {
  const { number, startInterval } = useCountdown(35000, 100, 20);

  const getNumberAsString = (num) => {
    const stringNumber = num.toString();
    if (stringNumber.length <= 3) {
      return stringNumber;
    }
    const chars = stringNumber.split('');
    chars.splice(-3, 0, '.');
    const newStringNumber = chars.join('');

    return newStringNumber;
  };

  return (
    <section id="newsletter" className="newsletter">
      <p></p>
      <Observer onIntersection={startInterval}>
        <p className="newsletter__people-joined">
          {number > 0 ? `${getNumberAsString(number) + '+'}` : 0} ALREADY JOINED
        </p>
      </Observer>
      <h2>Stay up-to-date with what we&#39;re doing</h2>
      <Form isMobile={isMobile} />
    </section>
  );
}
