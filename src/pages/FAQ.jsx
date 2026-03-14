import { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeBook, setActiveBook] = useState('shadow');

  const shadowFaqs = [
    {
      category: "About The Book",
      questions: [
        {
          q: "What is The Shadow Index about?",
          a: "The Shadow Index is a dark academia urban fantasy set in modern-day Boston, where magic flows through sound and music becomes a weapon. When former operative Oliver 'Oz' Cross investigates a series of ritualistic murders, he uncovers a conspiracy reaching into the highest levels of power, both human and otherworldly."
        },
        {
          q: "What genre is this book?",
          a: "The Shadow Index blends dark academia, urban fantasy, geopolitical thriller, and romantasy. If you enjoyed Ninth House by Leigh Bardugo, The Atlas Six by Olivie Blake, or A Deadly Education by Naomi Novik, this book is for you."
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
          a: "Resonance has physical, mental, and emotional costs. Channeling burns calories and strains muscles. It requires intense focus, and distraction breaks the effect. Strong emotions like fear, rage, or grief destabilize control. Augmented users risk neural degradation from overuse."
        },
        {
          q: "Can anyone use resonance?",
          a: "Most resonance users are augmented operatives who use cybernetic mods to channel energy. Natural channelers like Oz are rare and can manipulate resonance without augmentation. Some people are Veil-sensitive and can perceive the Continuum before formal training."
        },
        {
          q: "What makes Oz's resonance unique?",
          a: "Oz is a natural channeler who can manipulate resonance without augmentation, making him exceptionally rare. His abilities include force manipulation, stabilization zones, harmonic analysis, and resonance inversion. He also uses music as a vehicle for his abilities in ways most operatives cannot."
        }
      ]
    },
    {
      category: "The World",
      questions: [
        {
          q: "What is the Veil?",
          a: "The Veil was a metaphysical barrier that once separated our Earth from the Continuum, a parallel realm of Fae and mythic beings. On April 30, 1945, the Veil shattered during a catastrophic ritual, causing the two worlds to overlay each other. Now they occupy the same physical space but at different frequencies."
        },
        {
          q: "What is the Continuum?",
          a: "The Continuum is a parallel realm overlaid with our Earth since the Veil Event. It is home to Fae, vampires, dryads, and other mythic beings. Its capital, the Emerald City, is built of emerald glass and geometric architecture where time moves differently and everything is ordered to perfection."
        },
        {
          q: "What are bleed zones?",
          a: "Bleed zones are areas where reality is thin and both worlds overlap. They appear in major cities worldwide, including Boston, the primary setting of The Shadow Index. In bleed zones, time can dilate, Continuum beings can cross over, and resonance phenomena are more pronounced."
        },
        {
          q: "What is the Concordat?",
          a: "The Concordat of Resonant Nations is the governing body that regulates resonance phenomena on Earth. Founded in 1947, it maintains the Emerald Accord treaty with the Continuum. Its enforcement arm investigates resonance-related incidents and maintains the illusion of normalcy."
        },
        {
          q: "What is the Boston Array?",
          a: "The Boston Array is a resonance infrastructure network built beneath Boston in 1979. Its official purpose is bleed-zone stabilization, but its actual function runs much deeper. It has seven primary nodes beneath key landmarks and uses technology that was never meant to be public knowledge."
        }
      ]
    },
    {
      category: "Characters",
      questions: [
        {
          q: "Who is Oliver 'Oz' Cross?",
          a: "Oz is a 31-year-old former operative turned graduate student. After surviving a catastrophic mission that killed his entire team, he left military service and now studies Cognitive Resonance Theory at Halcyon University while working as an archival consultant. He is also a musician who performs under the alias 'OZ.'"
        },
        {
          q: "Who is Elara Draegor Voss?",
          a: "Elara is a Continuum operative investigating the same murders as Oz. She is brilliant, conflicted, and caught between loyalty to her world and an uneasy alliance with someone she was never supposed to trust. Their relationship is a slow-burn built on tension, mutual respect, and competing agendas."
        },
        {
          q: "What is the Virdis Order?",
          a: "The Virdis Order of Historical Compliance is the Continuum's intelligence agency. They function as spies, diplomats, and enforcers, maintaining the Emerald Accord on both sides of the Veil. Their motto: 'We do not forget. We do not forgive. We do not allow.'"
        }
      ]
    },
    {
      category: "The Wizard of Oz Connection",
      questions: [
        {
          q: "How does The Wizard of Oz connect to this story?",
          a: "L. Frank Baum, author of The Wonderful Wizard of Oz, was Veil-sensitive and could perceive the Continuum before the Veil shattered in 1945. His books were not children's fiction. They were field reports disguised as fantasy. The Emerald City, the Yellow Brick Road, Dorothy's journey, all of it was documentation of a real place."
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
          a: "The Shadow Index is complete and currently seeking agent representation for traditional publishing. Sign up for the newsletter to receive updates on the publication journey, cover reveals, and release dates."
        },
        {
          q: "Can I read a sample?",
          a: "Yes. You can download the first chapter for free by signing up for the newsletter on the homepage. You will get immediate access and stay updated on all book news."
        },
        {
          q: "Will there be an audiobook?",
          a: "An audiobook is planned once the book is published. Given the musical themes and resonance system woven through the story, the audio format will be particularly immersive. Newsletter subscribers will be the first to know when it is available."
        },
        {
          q: "Are you looking for ARC readers or beta readers?",
          a: "Yes. If you are interested in becoming an ARC (Advance Reader Copy) reader or joining the street team, please indicate your interest when signing up for the newsletter. Priority will be given to readers who love dark academia, urban fantasy, and slow-burn romance."
        }
      ]
    }
  ];

  const grimmFaqs = [
    {
      category: "About The Book",
      questions: [
        {
          q: "What is The Grimm Forge about?",
          a: "The Grimm Forge follows Peter Grimm, a man going nowhere fast, who is offered a spot in a high-stakes televised medieval survival competition run by the Cirrus Corporation. What looks like a structured game with clear rules and a life-changing prize turns into something far more dangerous. Peter wakes in a world that should not exist, where monsters are real, death is permanent, and no one is coming to pull them out."
        },
        {
          q: "What genre is The Grimm Forge?",
          a: "The Grimm Forge is survival dark fantasy with LitRPG-adjacent energy. It blends brutal survival, siege warfare, dark humor under pressure, and a deepening mystery about the world itself. It is more grounded and character-first than traditional LitRPG, but readers who enjoy that energy will feel right at home."
        },
        {
          q: "Is this a standalone or part of a series?",
          a: "The Grimm Forge is a complete standalone at 119,000 words, with series potential. The immediate story resolves, but the world is built to support future books. The ending opens a door rather than closing one."
        },
        {
          q: "What are the comp titles?",
          a: "The Will of the Many (James Islington) for high-stakes competition energy. Witch King (Martha Wells) for conspiracy and pressure. Dungeon Crawler Carl (Matt Dinniman) for brutal survival and dark, reactive humor. Red Rising (Pierce Brown) for escalating stakes and competitive pressure."
        },
        {
          q: "Who is the target audience?",
          a: "Readers who enjoy survival fantasy with a modern edge, pragmatic leads who make hard calls, dark humor that does not undercut the stakes, and mysteries that tighten slowly. If you liked the energy of LitRPG but want something more grounded and character-driven, The Grimm Forge is built for you."
        }
      ]
    },
    {
      category: "The World",
      questions: [
        {
          q: "Where does the story take place?",
          a: "The story begins in modern-day London before shifting to an unknown world that behaves wrong. Time bends. Ancient ruins sit where there should be empty hills. The air feels like it remembers things the characters do not. The primary setting is an ancient keep that becomes both shelter and siege ground."
        },
        {
          q: "Is this a portal fantasy?",
          a: "The Grimm Forge involves characters being transported to another world, but it is not a traditional portal fantasy. The emphasis is on survival, siege, and the slow unraveling of what this world actually is and why they were brought there. The 'how' matters less than the 'why,' and the 'why' is not what anyone expects."
        },
        {
          q: "What is the Cirrus Corporation?",
          a: "The Cirrus Corporation is the organization behind The Realm, the televised medieval competition that Peter enters at the start of the story. They present themselves as a high-end entertainment company. What they actually are is one of the central questions the book builds toward."
        },
        {
          q: "What is the Red Dragon Moon?",
          a: "The Red Dragon Moon is a second moon that rises over the world Peter finds himself in. Its appearance is tied to something ancient and cyclical. It is not a good sign. Beyond that, the details are best discovered in the book."
        }
      ]
    },
    {
      category: "Characters",
      questions: [
        {
          q: "Who is Peter Grimm?",
          a: "Peter is the protagonist and narrator. He is rugged, red-haired, with mismatched eyes, one vivid blue and one deep green. He is not a hero by nature. He is a man who has been drifting, haunted by a past he cannot outrun. What makes him compelling is not that he is exceptional from the start, but that survival forces him to become something he never planned to be. The voice is first-person, conversational, and laced with dry humor that does not disappear even when things get dark."
        },
        {
          q: "Who are the other key characters?",
          a: "Elora is an ethereal presence with stark white hair, sharp instincts, and a connection to the world's mysteries that runs deeper than anyone initially realizes. Trae is a towering, physically imposing man with a booming voice and a protective nature that makes him invaluable in a siege. Raman is sharp, analytical, and a source of strategy and dark wit. Each character has a distinct voice and a role that evolves as the pressure increases."
        },
        {
          q: "Who is Varrick?",
          a: "Varrick is a warlord who operates in the world Peter finds himself in. He builds his power on fear and force, and he marks Peter's group as a problem to be solved. He is not a cartoonish villain. He is a man who understands leverage and applies it without hesitation. The siege he brings is as much psychological as it is physical."
        }
      ]
    },
    {
      category: "Tone and Style",
      questions: [
        {
          q: "How dark does it get?",
          a: "The Grimm Forge does not flinch. Death is permanent. Choices have weight. Peter and his group cross lines they cannot uncross, and the book does not let them off the hook for it. At the same time, the protagonist's voice carries dry humor and a pragmatic wit that keeps the story from becoming relentlessly grim. The tone balances dark and hopeful without cheating either."
        },
        {
          q: "Is there humor in the book?",
          a: "Yes, and it is earned. The humor comes from Peter's voice and the absurdity of the situations rather than from undercutting the stakes. Think reactive, situational, slightly cynical. It is one of the things that makes the book feel distinct from other survival fantasy."
        },
        {
          q: "Is there romance?",
          a: "There are relationships that develop under pressure, but The Grimm Forge is not a romance. The focus is survival, leadership, and the cost of both. Any emotional connections that form do so because the circumstances demand it."
        }
      ]
    },
    {
      category: "Publication & Availability",
      questions: [
        {
          q: "When will The Grimm Forge be published?",
          a: "The Grimm Forge is complete at 119,000 words and currently seeking agent representation for traditional publishing. Sign up for the newsletter to stay updated on the publication journey and release news."
        },
        {
          q: "Can I read a sample?",
          a: "Yes. You can download the prologue for free by signing up for the newsletter on the homepage. You will get immediate access to the opening of the book, including the narrated prologue video available on the Books page."
        },
        {
          q: "Are you looking for ARC readers or beta readers?",
          a: "Yes. If you are interested in reading an advance copy or joining the street team, indicate your interest when signing up for the newsletter. Readers who enjoy survival fantasy, LitRPG-adjacent stories, and character-driven dark fiction are especially welcome."
        }
      ]
    }
  ];

  const activeFaqs = activeBook === 'shadow' ? shadowFaqs : grimmFaqs;

  const toggleQuestion = (sectionIdx, questionIdx) => {
    const index = `${sectionIdx}-${questionIdx}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleBookSwitch = (book) => {
    setActiveBook(book);
    setOpenIndex(null);
  };

  return (
    <div className="faq">
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Explore the worlds, characters, and stories behind both Alt Tales novels.</p>
      </section>

      <section className="faq-book-tabs">
        <button
          className={`faq-tab ${activeBook === 'shadow' ? 'faq-tab--active faq-tab--shadow' : ''}`}
          onClick={() => handleBookSwitch('shadow')}
        >
          The Shadow Index
        </button>
        <button
          className={`faq-tab ${activeBook === 'grimm' ? 'faq-tab--active faq-tab--grimm' : ''}`}
          onClick={() => handleBookSwitch('grimm')}
        >
          The Grimm Forge
        </button>
      </section>

      <section className="faq-content">
        {activeFaqs.map((section, sectionIdx) => (
          <div key={`${activeBook}-${sectionIdx}`} className="faq-section">
            <h2>{section.category}</h2>
            <div className="faq-questions">
              {section.questions.map((faq, questionIdx) => {
                const index = `${sectionIdx}-${questionIdx}`;
                const isOpen = openIndex === index;

                return (
                  <div key={questionIdx} className="faq-item">
                    <button
                      className={`faq-question ${activeBook === 'grimm' ? 'faq-question--grimm' : ''}`}
                      onClick={() => toggleQuestion(sectionIdx, questionIdx)}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className={`faq-answer ${activeBook === 'grimm' ? 'faq-answer--grimm' : ''}`}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className={`faq-cta ${activeBook === 'grimm' ? 'faq-cta--grimm' : ''}`}>
          <h3>Still Have Questions?</h3>
          <p>Reach out via the contact form or follow <strong>@Alt_Tales_Books</strong> on TikTok for behind-the-scenes content, world-building details, and updates on both novels.</p>
          <a href="/contact" className="cta-button">Contact RJ Stenson</a>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
