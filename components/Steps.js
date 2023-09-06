import { useState, useEffect } from 'react';

const Steps = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="content-container">
      <div className="row">
        <div className="element-set">
          <div className="circle-container">
            <div className="circle">1</div>
          </div>
          <div className="text-container">
            <h2>Prijava</h2>
            <p>Potrebno je kreirati korisnički račun, te se prijaviti prilikom svake rezervacije termina.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="element-set">
          <div className="circle-container">
            <div className="circle">2</div>
          </div>
          <div className="text-container">
            <h2>Odabir termina</h2>
            <p>Nakon unosa razine instrukcija, predmeta, te datuma ponudit će Vam se slobodni termini.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="element-set">
          <div className="circle-container">
            <div className="circle">3</div>
          </div>
          <div className="text-container">
            <h2>Potvrda</h2>
            <p>Nakon rezervacije, prikazat će se potvrda o uspješnoj rezervaciji termina.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;