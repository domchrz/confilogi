import './Faq.scss';
import AccordionTab from './AccordionTab';
import useSelector from '../../../hooks/useSelector';
import useDispatch from '../../../hooks/useDispatch';

export default function Faq() {
  const areTabsActive = useSelector((state) => state.faq);
  const dispatch = useDispatch();

  const setTabStatus = (tabName, bool) => {
    dispatch({
      type: 'UPDATE_FAQ',
      payload: {
        faq: tabName,
        bool,
      },
    });
  };

  return (
    <section id="faq" className="faq">
      <div className="faq__content">
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you&#39;d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="faq__accordion">
        <AccordionTab
          title="What is Bookmark?"
          onClick={() => setTabStatus('tab1', !areTabsActive.tab1)}
          isActive={areTabsActive.tab1}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus
          necessitatibus expedita dolorum hic ex excepturi eaque, culpa
          explicabo dolorem quae, ea harum consequuntur nemo odit fugit?
          Eligendi, aut facilis?
        </AccordionTab>
        <AccordionTab
          title="How can I request new browser?"
          onClick={() => setTabStatus('tab2', !areTabsActive.tab2)}
          isActive={areTabsActive.tab2}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus
          necessitatibus expedita dolorum hic ex excepturi eaque, culpa
          explicabo dolorem quae, ea harum consequuntur nemo odit fugit?
          Eligendi, aut facilis?
        </AccordionTab>
        <AccordionTab
          title="Is there mobile app?"
          onClick={() => setTabStatus('tab3', !areTabsActive.tab3)}
          isActive={areTabsActive.tab3}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus
          necessitatibus expedita dolorum hic ex excepturi eaque, culpa
          explicabo dolorem quae, ea harum consequuntur nemo odit fugit?
          Eligendi, aut facilis?
        </AccordionTab>
        <AccordionTab
          title="What about other Chromium browsers?"
          onClick={() => setTabStatus('tab4', !areTabsActive.tab4)}
          isActive={areTabsActive.tab4}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus
          necessitatibus expedita dolorum hic ex excepturi eaque, culpa
          explicabo dolorem quae, ea harum consequuntur nemo odit fugit?
          Eligendi, aut facilis?
        </AccordionTab>
      </div>
    </section>
  );
}
