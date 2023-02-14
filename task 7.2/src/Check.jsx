import React, { useState } from 'react';

function Checkboxhandle(){
    const [checkBoxes, setCheckBoxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: true,
        checkbox4: true
    });

    const handleCheckBoxChange = (e) => {
        const { name, checked } = e.target
        setCheckBoxes({
            ...checkBoxes,
            [name]: checked
        });
    }

    return (
        <div>
            <label htmlFor="">
                I read the terms
                <input type="checkbox" 
                name="checkbox1" 
                checked={checkBoxes.checkbox1} 
                onChange={handleCheckBoxChange} />
            </label><br/>
            <label htmlFor="">
                i agree to the terms
                <input type="checkbox" 
                name="checkbox2" 
                checked={checkBoxes.checkbox2} 
                onChange={handleCheckBoxChange} />
            </label><br/>
            <label htmlFor="">
                Send me notifications
                <input type="checkbox" 
                name="checkbox3" 
                checked={checkBoxes.checkbox3} 
                onChange={handleCheckBoxChange} />
            </label><br/>
            <label htmlFor="">
                Send me Product suggestion
                <input type="checkbox" 
                name="checkbox4" 
                checked={checkBoxes.checkbox4} 
                onChange={handleCheckBoxChange} />
            </label><br/>
        </div>
    )
}

export default Checkboxhandle;

