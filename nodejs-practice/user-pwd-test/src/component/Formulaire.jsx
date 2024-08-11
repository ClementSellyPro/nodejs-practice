import { useState } from 'react';
import '../style/Formulaire.css';

function Formulaire(){

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(){

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <label for='userName' name='userName'>Username :</label>
                <input type='text' id='userName' name='userName' />
            </div>
            <div className='row'>
                <label for='password' name='password'>Password :</label>
                <input type='text' id='password' name='password' />
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Formulaire;