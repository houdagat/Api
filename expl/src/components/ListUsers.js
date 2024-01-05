import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import UserCard from './UserCard'
import { Container } from 'react-bootstrap'

const ListUser = () => {
  const [users,setUsers] = useState([]);
// plusieurs user donc [] f useState

  useEffect(() => {
    // https://jsonplaceholder.typicode.com/users  = API, on va consommer le get affiché
  // axios bebliothèque bch tab3ath request tarjalk promes

    axios
  .get ('https://jsonplaceholder.typicode.com/users')
  .then((res)=> setUsers(res.data))
  .catch((err) => console.log(err));

  //then je afficher quoi = request
  //catch pour afficher les erreurs
  // get juste pour l'affichage puisq continu 7adher
  // methode 'crud' creat read update delete

  }, []);

    return (
    <div>
      <Container>
        <row>
          {users.map((user,i) => (
            <UserCard user={user} />
        ))}
            </row>
      </Container>
    </div>
  )
}

export default ListUser