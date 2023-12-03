import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBirthdayCake,
    faDrumstickBite,
    faGlassCheers,
    faMusic,
    faUtensilSpoon,
    faUtensils,
    faStar
    } from '@fortawesome/free-solid-svg-icons';

import './cube.scss';

const Cube = () => {
    return (
        <div className='stage-cube-cont'>
                <div className="cubespinner">
                    <div className="face1">
                    <FontAwesomeIcon icon={faUtensilSpoon} color="#5ED4F4" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faBirthdayCake} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faUtensils} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faDrumstickBite} color="#DD0031" rotation={270} />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faMusic} color="#EFD81D" rotation={270} />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGlassCheers} color="#D4AF37" rotation={270} />
                    </div>
                </div>
            </div>
    );
};

export default Cube;