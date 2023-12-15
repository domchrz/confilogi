import Button from '../Button';
import './AccordionTab.scss';
export default function AccordionTab({ children, title, isActive, onClick }) {
  return (
    <div className="faq__accordion-tab">
      <header className="faq__accordion-tab-header">
        <p>{title}</p>
        <Button
          isActive={isActive}
          onClick={onClick}
        />
      </header>
      <article className="faq_accordion-tab-content">
        {isActive && <p>{children}</p>}
      </article>
    </div>
  );
}
