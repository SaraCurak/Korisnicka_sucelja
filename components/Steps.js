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
                            <h2>Title 1</h2>
                            <p>This is some text for content 1.</p>
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
                            <h2>Title 2</h2>
                            <p>This is some text for content 2.</p>
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
                            <h2>Title 3</h2>
                            <p>This is some text for content 3.</p>
                        </div>
                    </div>
                </div>
            </div>
            );
};
            
export default Steps;