import { useEffect, useState } from "react";

function Users(){

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/form')
        .then(res => res.json())
        .then(data => setUserList(data));
    }, [userList]);

    function handleDelete(e){
        const target = e.target.dataset.id;
        
        fetch('http://localhost:3000/api/form', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: target})
        })
        .catch(error => console.log(error));
    }

    return(
        <div className="Users">
            {
                userList.map((user, key) => {
                    return <div className="user" key={key}>
                        <p onClick={handleDelete} data-id={user._id}> {user.name} _ _ _ _ _ _ _ _ {user.password}</p>
                    </div>
                })
            }
        </div>
    )
}

export default Users;