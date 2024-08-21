import { useNavigate } from 'react-router-dom';
import '../style/Connexion.css';
import Buttons from './Buttons';

function Connexion(){

    const navigate = useNavigate();

    function handleConnexionSubmit(e){
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);

        const name =     formData.get('username');
        const password = formData.get('password');

        const userIdentifiant = {
            "name": name,
            "password": password
        }

        fetch('http://localhost:3000/api/form/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userIdentifiant)
        })
        .then(res => {if(res.ok){
            console.log(res);
            navigate('/connected');
        }else{
            console.log(res);
            navigate('/notconnected');
        }})
        .catch(error => console.log(error));

        form.reset();
    }

    return (
        <div className='Connexion'>

            <form onSubmit={handleConnexionSubmit}>
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
            </form>
        </div>
    )
}

export default Connexion;