import { useState, useEffect } from 'react';
import Image from 'next/image';
import instruktor1 from '../public/images/Instructors/instruktor1.jpg'
import instruktor2 from '../public/images/Instructors/instruktor2.jpg'
import instruktor3 from '../public/images/Instructors/instruktor3.jpg'
import instruktor4 from '../public/images/Instructors/instruktor4.jpg'
import instruktor5 from '../public/images/Instructors/instruktor5.jpg'
import instruktor6 from '../public/images/Instructors/instruktor6.jpg'

const Instructors = () => {
    const [isClicked, setIsClicked] = useState(false);
    

    useEffect(() => {
    }, []);
      
    return (
        <div>
            <div className="testimonials-row2">
                <div className="testimonial-container">
                    <div className="brushed-title-container-cover">
                        <h2 className="brushi">Matematika</h2>
                    </div>
                </div>
            </div>
            <div className="testimonials-row2">
                <div className="testimonial-container">

                    <div className="tile instructors-container">
                        <div className="col-lg-6">
                            <div className="testimonial-image">
                                <img src={instruktor1.src}/> 
                            </div>
                            <div className="testimonial-overlay"></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="testimonial-content testimonial-content-right">
                                <div className="testimonial-name">
                                    Lana Matić
                                </div>
                                <div className="testimonial-position">
                                    Matematika
                                </div>
                                <div className="testimonial-quote">
                                    "Pozdrav svima! Ja sam Lana, student matematike koji voli rješavati zagonetke. Osim matematičkih izazova, bavim se i fotografijom i dizajnom. Kroz svoj rad u centru za poduke, želim potaknuti kreativnost učenika i pokazati im da matematika nije samo brojevi, već i igra uma."
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="testimonial-content testimonial-content-left">
                                <div className="testimonial-name">
                                    Vinko Lukić
                                </div>
                                <div className="testimonial-position">
                                    Matematika
                                </div>
                                <div className="testimonial-quote">
                                    "Pozdrav! Ja sam Vinko, veseli student matematike i zaljubljenik u kreativno razmišljanje. Osim što rješavam matematičke probleme, u slobodno vrijeme se bavim crtanjem i slikanjem. Kroz rad u centru za poduke, nastojim prenijeti svoju strast prema matematici i potaknuti učenike da vide njezinu ljepotu u svakodnevnim situacijama."
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="testimonial-image">
                                <img src={instruktor6.src}/>
                            </div>
                            <div className="testimonial-overlay"></div>
                        </div>


            </div>
        </div>
    </div>
    {/* drugi  */}
    <div className="testimonials-row">
            <div className="testimonial-container">
            <div className="brushed-title-container-cover">
                        <h2 className="brushi">Fizika</h2>
                    </div>
        
      
            <div className="tile instructors-container">

                <div className="col-lg-6">
                    <div className="testimonial-image">
                        <img src={instruktor2.src}/>
                    </div>
                    <div className="testimonial-overlay"></div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-content testimonial-content-right">
                        <div className="testimonial-name">
                            Mario Duvnjak
                        </div>
                        <div className="testimonial-position">
                            Fizika
                        </div>
                        <div className="testimonial-quote">
                            "Dobar dan svima! Ja sam Mario, student fizike i zaljubljenik u glazbu. Pored istraživanja prirodnih zakona, sviram gitaru i pišem pjesme. U centru za poduke, koristim svoju strast za fizikom kako bih učenicima približio svijet znanosti na interaktivan način."
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-content testimonial-content-left">
                        <div className="testimonial-name">
                            Tena Buljan
                        </div>
                        <div className="testimonial-position">
                            Fizika
                        </div>
                        <div className="testimonial-quote">
                            "Bok svima! Ja sam Tena, studentica fizike koja obožava spoj znanosti i plesa. Kada ne analiziram zakone prirode, korake koristim za istraživanje ritma i elegancije plesa. Od kvantne fizike do plesne koreografije, trudim se pronaći ljepotu u svemu što radim. Kroz rad u centru za poduke, želim učenicima pokazati da se znanstveno razmišljanje može prenijeti kroz plesnu harmoniju te inspirirati ih da razmišljaju kreativno i intuitivno."
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-image">
                        <img src={instruktor5.src}/>
                    </div>
                    <div className="testimonial-overlay"></div>
                </div>


            </div>
        </div>
    </div>
    {/* treci */}
    <div className="testimonials-row2">
                <div className="testimonial-container">
                    <div className="brushed-title-container-cover">
                        <h2 className="brushi">Kemija</h2>
                    </div>
                </div>
            </div>
    <div className="testimonials-row2">
            <div className="testimonial-container">
        
      
            <div className="tile instructors-container">

                <div className="col-lg-6">
                    <div className="testimonial-image">
                        <img src={instruktor3.src}/>
                    </div>
                    <div className="testimonial-overlay"></div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-content testimonial-content-right">
                        <div className="testimonial-name">
                            Dino Paladin
                        </div>
                        <div className="testimonial-position">
                            Kemija
                        </div>
                        <div className="testimonial-quote">
                            "Pozdrav svima! Moje ime je Dino, student kemije koji s jednakom strašću pristupa i eksperimentima u laboratoriju i kuhanju u kuhinji. Kada ne istražujem kemijske reakcije, pronalazim radost u stvaranju različitih okusa i tekstura kroz kuhanje. U centru za poduke, koristim svoje znanje kemije kako bih učenicima približio kompleksne koncepte kroz svakodnevne primjere i pokazao im da se kemija može naći i u svakom receptu koji pripremamo."
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-content testimonial-content-left">
                        <div className="testimonial-name">
                            Marija Jurić
                        </div>
                        <div className="testimonial-position">
                            Kemija
                        </div>
                        <div className="testimonial-quote">
                            "Pozdrav svima! Moje ime je Marija, studentica kemije s ljubavlju prema eksperimentima. Kada nisam okružena reagensima, uživam u pisanju priča i čitanju. U centru za poduke, radim na tome da kemiju približim učenicima kroz praktične primjere i pokažem im kako se svijet kemije krije svuda oko nas."
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="testimonial-image">
                        <img src={instruktor4.src}/>
                    </div>
                    <div className="testimonial-overlay"></div>
                </div>


            </div>
        </div>
    </div>
    </div>
    );
};

export default Instructors;