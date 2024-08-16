import '../style/Formulaire.css';

function Formulaire(){

    function handleSubmit(e){
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);

        const username = formData.get('username');
        const password = formData.get('password');

        const newUser = {
            "name": username,
            "password": password
        }

        fetch('http://localhost:3000/api/form', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        .then(res => res.text())
        .then(data => console.log(data))
        .catch(error => console.log(error));

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