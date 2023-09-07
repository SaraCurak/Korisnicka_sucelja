import { useState, useEffect } from 'react';

const Steps = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {}, []);

  return (
    <div>
          <div className="testimonials-row2">
            <div className="testimonial-container">
                <div className="brushed-title-container-cover">
                    <h2 className="brushi">Uputstva</h2>
                </div>
            </div>
          </div>
      <div className="testimonials-row2">
        <div className="testimonial-container">
          <div className="tile instructors-container">
            
            <div className="col-lg-6">
                <div className="testimonial-images">
                  <div className="circle">1</div>
                </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial-content testimonials-content-right">
                <div className="testimonial-name">
                              Prijava
                </div>
                <div className="testimonial-quote">
                  Potrebno je kreirati korisnički račun, te se prijaviti prilikom svake rezervacije termina."
                </div>
              </div>
            </div>

            <div className="col-lg-6">
                    <div className="testimonial-content testimonial-content-left">
                        <div className="testimonial-name">
                            Odabir termina
                        </div>
                        <div className="testimonial-quote">
                        Nakon unosa razine instrukcija, predmeta, te datuma ponudit će Vam se slobodni termini.
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6">
                    <div className="testimonial-images">
                      <div className="circle">2</div>
                    </div>
                    
                </div>

                <div className="col-lg-6">
                <div className="testimonial-images">
                  <div className="circle">3</div>
                </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial-content testimonials-content-right">
                <div className="testimonial-name">
                              Potvrda
                </div>
                <div className="testimonial-quote">
                Nakon rezervacije, prikazat će se potvrda o uspješnoj rezervaciji termina.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;