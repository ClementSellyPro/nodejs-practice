import { useEffect, useState } from "react";



function Users(){

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/form')
        .then(res => res.json())
        .then(data => setUserList(data));
    }, [userList]);

    return(
        <div className="Users">
            {
                userList.map((user) => {
                    return <div className="user">
                        <p>{user.name}</p>
                    </div>
                })
            }
        </div>
    )
}

export default Users;