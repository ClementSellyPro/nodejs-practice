import { useState } from 'react';
import '../style/Formulaire.css';

function Formulaire(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);

        const username = formData.get('username');
        const password = formData.get('password')

        setUsername(username);
        setPassword(password);

        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <label htmlFor='username' name='username'>Username :</label>
                <input type='text' id='username' name='username' />
            </div>
            <div className='row'>
                <label htmlFor='password' name='password'>Password :</label>
                <input type='text' id='password' name='password' />
            </div>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Formulaire;