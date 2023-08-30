import { useState, useEffect } from 'react';


const Steps = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
    }, []);

    return (
            <div class="content-container">
                <div class="row">
                    <div class="element-set">
                        <div class="circle-container">
                            <div class="circle">
                                1
                            </div>
                        </div>
                        <div class="text-container">
                            <h2>Prijava</h2>
                            <p>Potrebno je kreirati korisnički račun, te se prijaviti prilikom svake rezervacije termina.
</p>
                        </div>
                    </div>
                </div>
            
                <div class="row">
                    <div class="element-set">
                        <div class="circle-container">
                            <div class="circle">
                                2
                            </div>
                        </div>
                         <div class="text-container">
                            <h2>Odabir termina</h2>
                            <p>Nakon unosa razine instrukcija, predmeta, te datuma ponudit ćeVam se slobodni termini.</p>
                         </div>
                    </div>
                </div>
            
                <div class="row">
                    <div class="element-set">
                        <div class="circle-container">
                            <div class="circle">
                                3
                            </div>
                        </div>
                        <div class="text-container">
                            <h2>Potvrda</h2>
                            <p>Nakon rezervacije, prikazat će se potvrda o uspješnoj rezervaciji termina.</p>
                        </div>
                    </div>
                </div>
            </div>
            );
};
            
export default Steps;