import { useState } from 'react'
import './Simulation.css'
import Setup_1_exp from '../../Component/setup_1_exp/setup_1_exp'
import Setup_2_exp from '../../Component/Setup_2_exp/Setup_2_exp'
import Setup_3_exp from '../../Component/setup_3_exp/setup_3_exp'


const Simulation = () => {

    const [component, setComponent] = useState(1)
    const [steps, setSteps] = useState('Click on the "Start" button to get start Project. ')
 
    return (
        <div className='Simulation'>
            {component == 1 ? <Setup_1_exp setComponent={setComponent} steps={steps} setSteps={setSteps} /> : ""}
            {component == 2 ? <Setup_2_exp setComponent={setComponent} steps={steps} setSteps={setSteps} /> : ""}
            {component == 3 ? <Setup_3_exp setComponent={setComponent} steps={steps} setSteps={setSteps} /> : ""}
        </div>
    )
}

export default Simulation
