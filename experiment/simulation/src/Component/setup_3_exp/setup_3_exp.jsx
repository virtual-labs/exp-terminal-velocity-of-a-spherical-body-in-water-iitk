import assets from '../../assets/assets'
import PropTypes from 'prop-types';
import './setup_3_exp.css'
import { useState, useEffect } from 'react';

const Setup_3_exp = ({steps, setSteps }) => {

    const [step, setStep] = useState(0);
    const [ballMeas, setBallMeas] = useState(0);
    const [ballNumberMeas, setBallNumberMeas] = useState(0);

    const [moveBall, setMoveBall] = useState(0)


    useEffect(() => {
        if (step === 0 || step >= 5) return;

        const measurements = ['1mm', '2mm', '3mm'];
        const interval = setTimeout(() => {
            setBallMeas(measurements[step - 1]);
            setBallNumberMeas(step);
            if (step == 4) {
                const elements = document.getElementsByClassName('apparatus-screw-gauge');
                if (elements.length > 0)
                    elements[0].style.animationDirection = 'reverse';
            }
            if (step < 4) setStep(step + 1);
        }, 4000);

        return () => clearTimeout(interval);
    }, [step]);

    const BallMeasurement = () => {
        if (step === 4)
            return
        document.getElementsByClassName('apparatus-screw-gauge')[0].classList.add('apparatus-screw-gauge-measurement')
        setStep(1);
    };

    useEffect(() => {
        if (step < 5) return

        if (step === 5)
            setMoveBall(1)

        const interval = setTimeout(() => {
            setMoveBall(step - 3)
            if (step < 7) setStep(step + 1);
        }, 10000);

        return () => clearTimeout(interval);
    }, [step])


    const startExperiment = () => { 
        setStep(5)
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

            <div className="setup_2-table setup_3-table">

                <img className='table' src={assets.table} alt="" />
                <div className="apparatus-1 setup_3-cylinder">
                    <img id='Beaker_app_1' src={assets.cylinder_with_YZ} alt="" />
                    <span id='mark_y'>Y</span>
                    <span id='mark_Z'>Z</span>
                </div>

                <div className="apparatus-2">
                    <img className='bottle half-water-with-cap'  src={assets.halfwaterwithcap} alt="" />
                </div>

                {ballMeas ?
                    <div className='measurement-value'>
                        <div><b>Ball {step - 1}</b> (Measurement Value) : <span>{ballMeas}</span></div>
                    </div>
                    : <></>
                }

                <div className='stopwatch-container'>
                    <img className='stopwatch' src={assets.stopwatch} alt="" />
                </div>

                <div onClick={BallMeasurement}>
                    <img className='apparatus-screw-gauge' onClick={()=>setSteps('Click the Start Experiment button')} src={assets.screwGauge} alt="" />
                </div>

                {[1, 2, 3].map((num) => (
                    <div key={num}>
                        <img

                            className={`ball-${num} ball ${ballNumberMeas === num ? `ball-${num}-animation` : ''} ${moveBall === num ? `ball-${num}-move-measu` : ''}`}
                            src={assets.ball}
                            alt={`Ball ${num}`}
                        />
                    </div>
                ))}

            </div>

            <div className="buttons">
                {
                    <button onClick={startExperiment}>Start Experiment</button>
                }
            </div>

        </div>
    )
}

Setup_3_exp.propTypes = {
    setComponent: PropTypes.func
};


export default Setup_3_exp