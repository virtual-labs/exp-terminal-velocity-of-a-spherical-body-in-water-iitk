import React from 'react'
import assets from '../../assets/assets'
import './Setup_2_exp.css'
import PropTypes from 'prop-types';



const Setup_2_exp = ({ setComponent, steps, setSteps }) => {



    const setMoveCap_forward = () => {
        setSteps('Click on the Bottle to fill water in Cylindrical tube')
        const element = document.getElementById('cap_app_2'); // Select the element
        element.classList.add('apparatus-2-cap-move-forwards'); // Add the class 'new-class' 
    }


    const dropWater = () => {
        setSteps('Click the Next button to continue the experiment.')
        const element = document.getElementById('bottle_app_2'); // Select the element
        element.classList.add('apparatus-2-bottle');

        const beaker = document.getElementById('Beaker_app_1') // Add the class 'new-class'
        const waterStrip = document.getElementById('waterstrip')

        setTimeout(() => {
            waterStrip.style.height = '200px'
            waterStrip.style.display = 'block'
            waterStrip.style.visibility = 'visible'
        }, 3000);

        setTimeout(() => {
            beaker.src = assets.fullBeaker;
            beaker.style.width = '150px'
            beaker.style.height = '321.39px'

        }, 4000)

        setTimeout(() => {
            waterStrip.style.visibility = 'hidden'
            element.src = assets.halfBeaker;
            element.classList.add('apparatus-2-backPositionBeaker');
        }, 4000);
    }

    return (
        <div className='setup_1-container setup_2-container'>
            <div className="header">
                <h2>Instructions : </h2>
                <p>{steps}</p>
            </div>
            <div className="setup_1-board">
                <img src={assets.school_blackboard} alt="" />
                <div className="board-text">
                    <h2 className='heading'>Fluid Mechanics Lab</h2>
                    <h3><b>Experiment--&gt;</b>To find out the Terminal Velocity of Spherical body in Water</h3>
                </div>
            </div>

            <div className="setup_2-table">

                <img className='table' src={assets.table} alt="" />
                <div className="apparatus-1">
                    <img id='Beaker_app_1' src={assets.mainBeaker} alt="" />
                    <img id='waterstrip' className='waterstrip' src={assets.waterStrip} alt="" />
                </div>

                <div className="apparatus-2">
                    <img className='bottle' id='bottle_app_2' src={assets.full_water} onClick={dropWater} alt="" />
                    <img className='cap' id='cap_app_2' src={assets.bottle_cap} onClick={setMoveCap_forward} alt="cap" />
                </div>

            </div>

            <div className="buttons">
                <button onClick={() => {setComponent(3), setSteps('Click on screw gauge for ball measurement')}}>Next</button>
            </div>

        </div>
    )
}

Setup_2_exp.propTypes = {
    setComponent: PropTypes.func
};

export default Setup_2_exp
