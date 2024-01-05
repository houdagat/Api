import React from 'react'
import { useParams } from 'react-router-dom';
import {useEffect,useState} from 'react'
import axios from 'axios'

function Profile() {
  
  const [user,setUser] = useState({});
  //  user c'est un bjet donc {} 

    const { userId } = useParams();
    
    useEffect(() => {
  axios
  .get (`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then((res)=> setUser(res.data))
  .catch((err) => console.log(err));
}, []);

    return (
    <div>
      <h3> {user.name} </h3>
      <h3> {user.address && user.address.street} </h3>
      <h3> {user.email} </h3>
    </div>
    // k te5dem instruction marra to5roj marra lè 5atr objet f wost objet {user.adress.street} ydhi3 fiha, solution {user.adress && user.adress.street}
    // ou bien f wost div n7ot card eli f component usercard sans link et button
  )

}

export default Profile