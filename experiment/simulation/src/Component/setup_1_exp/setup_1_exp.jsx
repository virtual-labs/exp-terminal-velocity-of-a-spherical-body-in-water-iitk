import './setup_1_exp.css' 
import assets from '../../assets/assets'
import PropTypes from 'prop-types';

const Setup_1_exp = ({ setComponent, steps , setSteps}) => {

 
    return (
        <div className='setup_1-container'>
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
            <div className="setup_1-table">
                <img src={assets.fullsetup} alt="" />
            </div>
            <div className="buttons">
                <button onClick={()=>{setComponent(2), setSteps('Click on the Bottle cap')}}>Start</button>
            </div>
        </div>
    )
}

Setup_1_exp.propTypes = {
    setComponent: PropTypes.func
};

export default Setup_1_exp
