import { useState } from 'react';
import { faqs } from '../data/content.jsx';
import { PlusIcon } from './icons.jsx';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex((current) => (current === index ? null : index));

  return (
    <section id="faq" className="wrap" style={{ padding: '60px 24px 90px' }}>
      <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 50px' }}>
        <span className="eyebrow">Common Inquiries</span>
        <h2 className="section-title" style={{ margin: '16px 0' }}>
          Frequently Asked Questions
        </h2>
      </div>
      <div id="faqList" style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {faqs.map((faq, i) => (
          <div className={`faq-item reveal${openIndex === i ? ' open' : ''}`} key={faq.q}>
            <div className="faq-q" onClick={() => toggle(i)}>
              {faq.q}
              <PlusIcon />
            </div>
            <div className="faq-a">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
