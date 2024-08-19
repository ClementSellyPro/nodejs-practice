import '../style/Connexion.css';
import Buttons from './Buttons';

function Connexion(){
    return (
        <div className='Connexion'>
            <Buttons />
            
            <h2>Connexion</h2>

            <div className='row'>
                <label htmlFor='username' name='username'>Username :</label>
                <input type='text' id='username' name='username' />
            </div>
            <div className='row'>
                <label htmlFor='password' name='password'>Password :</label>
                <input type='text' id='password' name='password' />
            </div>

            <button type='submit'>Connexion</button>
        </div>
    )
}

export default Connexion;