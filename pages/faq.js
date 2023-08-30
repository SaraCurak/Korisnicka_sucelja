import { useState } from 'react'; // Import the useState hook

import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
const entriesList = [
  {
    question: "Kako rezervirati termin za instrukcije?",
    answer: "Rezervacija termina za instrukcije je jednostavna! Samo posjetite našu stranicu za rezervaciju, odaberite predmet za koji trebate pomoć i odaberite dostupno vrijeme. Slijedite korake kako biste potvrdili svoju rezervaciju.",
  },
  {
    question: "Koji predmeti su dostupni za instrukcije?",
    answer: "Nudimo instrukcije iz širokog spektra predmeta, uključujući matematiku, znanost, jezike i više. Provjerite naš popis predmeta kako biste pronašli pomoć koja vam je potrebna.",
  },
  {
    question: "Imaju li vaši instruktori iskustva?",
    answer: "Apsolutno! Naši instruktori su visoko iskusni u svojim predmetima. Posvećeni su poučavanju i predanosti vašem uspjehu.",
  },
  {
    question: "Mogu li promijeniti svoj raspored instrukcija?",
    answer: "Da, možete! Ako trebate promijeniti svoj raspored instrukcija, prijavite se na svoj račun i idite na odjeljak 'Moje rezervacije'. Tamo možete premjestiti svoju sesiju.",
  },
  {
    question: "Je li dostupna online instrukcija?",
    answer: "Da, nudimo online instrukcije. Možete se povezati s instruktorom iz udobnosti svog doma i dobiti personaliziranu pomoć.",
  },
  {
    question: "Koliko traje svaka instrukcijska sesija?",
    answer: "Naša standardna instrukcijska sesija obično traje 1 sat. Međutim, možete također rezervirati dulje sesije ako je potrebno.",
  },
  {
    question: "Kako izvršiti plaćanje?",
    answer: "Plaćanja se mogu izvršiti putem našeg sigurnog online sustava za plaćanje. Prihvaćamo glavne kreditne kartice i PayPal radi vaše praktičnosti.",
  },
  {
    question: "Postoje li skriveni troškovi?",
    answer: "Ne, transparentni smo u vezi naše cijene. Trošak koji vidite prilikom rezervacije je ukupni trošak. Nema dodatnih skrivenih troškova.",
  },
  {
    question: "Mogu li zatražiti određenog instruktora?",
    answer: "Da, možete! Prilikom rezervacije sesije imate mogućnost odabira određenog instruktora na temelju njihove dostupnosti.",
  },
  {
    question: "Što ako nisam zadovoljan instrukcijskom sesijom?",
    answer: "Vaše zadovoljstvo nam je važno. Ako niste zadovoljni sesijom, javite nam i potrudit ćemo se da riješimo vaše brige.",
  },
  {
  question: "Kako rezervirati termin za instrukcije?",
  answer: "Rezervacija termina za instrukcije je jednostavna! Samo posjetite našu stranicu za rezervaciju, odaberite predmet za koji trebate pomoć i odaberite dostupno vrijeme. Slijedite korake kako biste potvrdili svoju rezervaciju.",
  },
  {
  question: "Koliko traje standardna instrukcijska sesija?",
  answer: "Naša standardna instrukcijska sesija obično traje 1 sat. Međutim, možete također rezervirati dulje sesije ako je potrebno.",
  },
  // Dodajte još pitanja i odgovora...
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
      <Navbar/>
      <div className="faqContainer">
        <h1 className="faqTitle">Frequently Asked Questions</h1>
        <div className="faqColumns">
          {entriesList.map((item, index) => (
            <div
              key={index}
              className={`faqItem ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <div
                className="faqQuestionCircle"
                onClick={() => toggleAnswer(index)}
                aria-expanded={expandedIndex === index}
              >
                {expandedIndex === index ? item.answer : item.question}
              </div>
            </div>
          ))}
        </div>
        <div className="zigzag"></div>
      <Footer/></div>    
      
    </div>

  );
}