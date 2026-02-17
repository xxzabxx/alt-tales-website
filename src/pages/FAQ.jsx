import { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "About The Book",
      questions: [
        {
          q: "What is The Shadow Index about?",
          a: "The Shadow Index is a dark academia urban fantasy set in modern-day Boston, where magic flows through sound and music becomes a weapon. When former operative Oliver 'Oz' Cross investigates a series of ritualistic murders, he uncovers a conspiracy reaching into the highest levels of power, both human and otherworldly."
        },
        {
          q: "What genre is this book?",
          a: "The Shadow Index blends dark academia, urban fantasy, geopolitical thriller, and romantasy. If you loved Ninth House by Leigh Bardugo, The Atlas Six by Olivie Blake, or A Deadly Education by Naomi Novik, this book is for you."
        },
        {
          q: "Is this a standalone or part of a series?",
          a: "The Shadow Index is a complete standalone story with series potential. The main plot resolves fully, but the world is rich enough to support future books if readers want more."
        },
        {
          q: "What are the comp titles?",
          a: "Ninth House (Leigh Bardugo), The Atlas Six (Olivie Blake), and A Deadly Education (Naomi Novik). Fans of atmospheric magic systems, morally complex characters, and slow-burn romance will feel right at home."
        }
      ]
    },
    {
      category: "The Magic System",
      questions: [
        {
          q: "What is resonance?",
          a: "Resonance is the manipulation of vibrational energy and metaphysical frequency fields. All matter vibrates at specific frequencies, and resonance practitioners can attune to these frequencies and manipulate them through mental precision, physical stamina, and emotional control."
        },
        {
          q: "How does resonance work?",
          a: "Resonance has three components: Attunement (sensing the frequency of a person, object, or space), Channeling (drawing resonance energy through one's body), and Manipulation (redirecting, amplifying, or dampening the frequency). It requires intense focus, physical endurance, and emotional stability."
        },
        {
          q: "What are the limitations of resonance?",
          a: "Resonance has physical, mental, and emotional costs. Channeling burns calories and strains muscles. It requires intense focus, and distraction breaks the effect. Strong emotions like fear, rage, or grief destabilize control. Augmented users (those with cybernetic mods) risk neural degradation from overuse."
        },
        {
          q: "Can anyone use resonance?",
          a: "Most resonance users are augmented operatives who use cybernetic mods (tattoo capacitors, implants) to channel energy. Natural channelers like Oz are rare and can manipulate resonance without augmentation, avoiding the risk of neural degradation. Some people are Veil-sensitive and can perceive the Continuum before formal training."
        },
        {
          q: "What makes Oz's resonance unique?",
          a: "Oz is a natural channeler who can manipulate resonance without augmentation, making him exceptionally rare. He uses direct neuro-muscular channeling through tattoo capacitors and breath control. His abilities include force manipulation, stabilization zones, harmonic analysis, and resonance inversion."
        }
      ]
    },
    {
      category: "The World",
      questions: [
        {
          q: "What is the Veil?",
          a: "The Veil was a metaphysical barrier that once separated our Earth (Terra Primus) from the Continuum, a parallel realm of Fae and mythic beings. On April 30, 1945, the Veil shattered during a catastrophic ritual, causing the two worlds to overlay each other. Now they occupy the same physical space but at different frequencies."
        },
        {
          q: "What is the Continuum?",
          a: "The Continuum is a parallel realm overlaid with our Earth since the Veil Event. It's home to Fae, vampires, dryads, and other mythic beings. The Emerald City is its capital, built of emerald glass and geometric architecture where time moves differently and everything is ordered to perfection."
        },
        {
          q: "What are bleed zones?",
          a: "Bleed zones are areas where reality is thin and both worlds overlap. They appear in major cities worldwide, including Boston, the primary setting of The Shadow Index. In bleed zones, time can dilate, Continuum beings can cross over, and resonance phenomena are more pronounced."
        },
        {
          q: "What is the Concordat?",
          a: "The Concordat of Resonant Nations is the governing body that regulates resonance phenomena on Earth. Founded in 1947, it maintains the Emerald Accord treaty with the Continuum. Its enforcement arm is the CBRS (Concordat Bureau of Resonant Security), which investigates resonance-related incidents and maintains the illusion of normalcy."
        },
        {
          q: "What is the Boston Array?",
          a: "The Boston Array is a resonance infrastructure network built beneath Boston in 1979. Its official purpose is bleed-zone stabilization, but its actual purpose is city-scale emotional regulation. It has seven primary nodes beneath key landmarks and uses hybrid U.S.-Soviet technology."
        }
      ]
    },
    {
      category: "Characters",
      questions: [
        {
          q: "Who is Oliver 'Oz' Cross?",
          a: "Oz is a 31-year-old former Magi-Corp operative turned graduate student. After surviving a catastrophic mission that killed his entire team, he left military service and now studies Cognitive Resonance Theory at Halcyon University while working as an archival consultant. He's also a musician who performs under the alias 'OZ.'"
        },
        {
          q: "Who is Elara Draegor Voss?",
          a: "Elara is a Continuum operative and member of the Virdis Order, the Continuum's secret police. She's been embedded in Boston investigating the same murders as Oz. She's brilliant, conflicted, and caught between loyalty to her world and growing feelings for Oz. Their relationship is a slow-burn romance built on trust and mutual respect."
        },
        {
          q: "What is the Virdis Order?",
          a: "The Virdis Order of Historical Compliance is the Continuum's secret police and intelligence agency. They function as spies, diplomats, and assassins, enforcing the Emerald Accord on both sides of the Veil. Their motto is 'We do not forget. We do not forgive. We do not allow.'"
        }
      ]
    },
    {
      category: "The Wizard of Oz Connection",
      questions: [
        {
          q: "How does The Wizard of Oz connect to this story?",
          a: "L. Frank Baum, author of The Wonderful Wizard of Oz (1900), was Veil-sensitive and could perceive the Continuum before the Veil shattered in 1945. His 'children's books' were actually field reports disguised as fantasy. The Emerald City, the Yellow Brick Road, and Dorothy's journey were all real documentation of the Continuum."
        },
        {
          q: "What is the Baum Codex?",
          a: "The Baum Codex is a collection of L. Frank Baum's unpublished journals, sketches, and correspondence describing the Continuum in detail. After the Veil Event, both the Concordat and the Continuum realized Baum's work was documentation, not fiction. Fragments of the Codex exist in multiple archives, but no one has assembled the complete set."
        }
      ]
    },
    {
      category: "Publication & Availability",
      questions: [
        {
          q: "When will The Shadow Index be published?",
          a: "The Shadow Index is currently seeking representation and publication. Sign up for the newsletter to receive updates on the publication journey, cover reveals, and release dates."
        },
        {
          q: "Can I read a sample?",
          a: "Yes! You can download the first chapter for free by signing up for the newsletter on the homepage. You'll get immediate access and stay updated on all book news."
        },
        {
          q: "Will there be an audiobook?",
          a: "An audiobook is planned once the book is published. Given the musical themes and resonance system, the audio format will be particularly immersive. Newsletter subscribers will be the first to know when it's available."
        },
        {
          q: "Are you looking for ARC readers or beta readers?",
          a: "Yes! If you're interested in becoming an ARC (Advance Reader Copy) reader or joining the street team, please indicate your interest when signing up for the newsletter. Priority will be given to readers who love dark academia, urban fantasy, and slow-burn romance."
        }
      ]
    }
  ];

  const toggleQuestion = (sectionIdx, questionIdx) => {
    const index = `${sectionIdx}-${questionIdx}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about The Shadow Index, the resonance magic system, and the world where music becomes a weapon.</p>
      </section>

      <section className="faq-content">
        {faqs.map((section, sectionIdx) => (
          <div key={sectionIdx} className="faq-section">
            <h2>{section.category}</h2>
            <div className="faq-questions">
              {section.questions.map((faq, questionIdx) => {
                const index = `${sectionIdx}-${questionIdx}`;
                const isOpen = openIndex === index;
                
                return (
                  <div key={questionIdx} className="faq-item">
                    <button 
                      className="faq-question"
                      onClick={() => toggleQuestion(sectionIdx, questionIdx)}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="faq-cta">
          <h3>Still Have Questions?</h3>
          <p>Reach out via the contact form or connect on TikTok @The.Shadow.index for more insights into the world of resonance and the making of The Shadow Index.</p>
          <a href="/contact" className="cta-button">Contact RJ Stenson</a>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
