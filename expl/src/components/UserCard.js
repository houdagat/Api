import React from 'react'
import {Card, CardBody, CardText,CardTitle,CardSubtitle,  Button,} from 'reactstrap'
import {Link} from 'react-router-dom'

function UserCard ({user}) {
  return (
    <div>
      <Card
  style={{
    width: '18rem'
  }}
>

  <CardBody>
    <CardTitle tag="h5"> {user.name} </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {user.username}
    </CardSubtitle>
    <CardText> {user.email} </CardText>
    <Button style={{height:'60px', backgroundColor:'yellow'}}>
        <Link to={`/profile/${user.id}`}> Go To Profile </Link> 
        </Button>
  </CardBody>
</Card>

    </div>

  )
}

export default UserCard