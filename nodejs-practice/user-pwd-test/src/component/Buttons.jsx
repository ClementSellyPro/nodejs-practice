import '../style/Buttons.css';
import { Link } from 'react-router-dom';

function Buttons(){
    return (
        <div className='Buttons'>
            <Link to='/'> <button className='btn inscription'>S'inscire</button> </Link>
            
            <Link to='/connexion'> <button className='btn connexion'>Se connecter</button> </Link>
        </div>
    )
}

export default Buttons;