import { useState } from 'react'; // Import the useState hook

import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
const entriesList = [
  {
    question: "Kako izvršiti plaćanje?",
    answer: "Plaćanja se mogu izvršiti putem našeg sigurnog online sustava za plaćanje. Prihvaćamo glavne kreditne kartice i PayPal radi vaše praktičnosti.",
  },
  {
    question: "Postoje li skriveni troškovi?",
    answer: "Ne, transparentni smo u vezi naše cijene. Trošak koji vidite prilikom rezervacije je ukupni trošak. Nema dodatnih skrivenih troškova.",
  },
  {
    question: "Kada trebam izvršiti plaćanje?",
    answer: "Nakon što rezervirate termin, dobit ćete potvrdu rezervacije koja će sadržavati detalje o plaćanju. Preporučujemo da izvršite plaćanje što je prije moguće kako biste osigurali svoj termin."
  },
  {
    question: "Mogu li zatražiti određenog instruktora?",
    answer: "Da, možete! Prilikom rezervacije sesije imate mogućnost odabira određenog instruktora na temelju njihove dostupnosti.",
  },
  {
    question: "Imaju li vaši instruktori iskustva?",
    answer: "Apsolutno! Naši instruktori su visoko iskusni u svojim predmetima. Posvećeni su poučavanju i predanosti vašem uspjehu.",
  },
  {
    question: "Kako se odabiru instruktori za vašu platformu?",
    answer: "Svi naši instruktori prolaze kroz temeljitu procjenu njihovog stručnog znanja i pedagoških vještina. Vodimo računa i o ocjenama koje dobivaju od učenika kako bismo osigurali visok standard kvalitete podučavanja."
  },  
  {
    question: "Je li dostupna online instrukcija?",
    answer: "Da, nudimo online instrukcije. Možete se povezati s instruktorom iz udobnosti svog doma i dobiti personaliziranu pomoć.",
  },
  {
    question: "Kako rezervirati termin za instrukcije?",
    answer: "Posjetite našu stranicu za rezervaciju, odaberite predmet za koji trebate pomoć i odaberite dostupno vrijeme. Slijedite korake kako biste potvrdili svoju rezervaciju.",
  },
  {
    question: "Mogu li promijeniti svoj raspored instrukcija?",
    answer: "Da, možete! Ako trebate promijeniti svoj raspored instrukcija, prijavite se na svoj račun i idite na odjeljak 'Moje rezervacije'. Tamo možete premjestiti svoju sesiju.",
  },
];


const rows = [
  {
    title: "Plaćanje",
    circles: [0, 1, 2],
  },
  {
    title: "Instruktori",
    circles: [3, 4, 5],
  },
  {
    title: "Termini",
    circles: [6, 7, 8],
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="faqContainer">
        <h1 className="faqTitle">Frequently Asked Questions</h1>
        <div className="faqRows">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="faqRow">
              <h2 className="faqRowTitle">{row.title}</h2>
              <div className="faqCircles">
                {row.circles.map((circleIndex) => (
                  <div
                    key={circleIndex}
                    className={`faqItem ${
                      expandedIndex === circleIndex ? 'expanded' : ''
                    }`}
                  >
                    <div
                      className="faqQuestionCircle"
                      onClick={() => toggleAnswer(circleIndex)}
                      aria-expanded={expandedIndex === circleIndex}
                    >
                      {expandedIndex === circleIndex
                        ? entriesList[circleIndex].answer
                        : entriesList[circleIndex].question}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="zigzag"></div>
        <Footer />
      </div>
    </div>
  );
}