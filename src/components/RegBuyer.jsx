import { useState, useEffect } from "react";
import axios from 'axios';
function RegBuyer() {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")



    return (

        <form onSubmit={e => {
            e.preventDefault();
            axios.post("http://localhost:3000/buyers",
                { firstname, lastname })
                .then(response => {
                    console.log(response);
                    setFirstname("");
                    setLastname("");

                })
                .catch(err => console.error(err))
        }}>

            <label htmlFor="firstName">FirstName</label>
            <input
                id="firstName"
                firstname="firstname"
                type="text"
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
                required
            />

            <label htmlFor="lastName">LastName</label>
            <input
                id="lastName"
                lastname="lastname"
                type="text"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
                required
            />

            <div>
                <button type="submit">
                    Submit
                </button>
            </div>

        </form>




    );
}

export default RegBuyer;

/***********************************


function RegBuyer() {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")


    const Buyers = []
    for (const b of firstname) {
        Buyers.push(<p>firstname:{b.firstname} <br /> lastname:{b.lastname}</p>)
    }

    function createBuyer() {
        <form onSubmit={e => {
            e.preventDefault();
            axios.post("http://localhost:3000/buyers",
                { firstname, lastname })
                .then(response => {
                    console.log(response);
                    setFirstname("");
                    setLastname("");

                })
                .catch(err => console.error(err))
        }}>

            <label htmlFor="firstName">FirstName</label>
            <input
                id="firstName"
                firstname="firstname"
                type="text"
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
                required
            />

            <label htmlFor="lastName">LastName</label>
            <input
                id="lastName"
                lastname="lastname"
                type="text"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
                required
            />

            <div>
                <button type="submit">
                    Submit
                </button>
            </div>

        </form>


    }

    return (
        <div>
       <button onClick={() => createBuyer()}> Register </button> 
        
        {Buyers }
        </div>
 )
}

export default RegBuyer;****/