import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../data/users";
import { Container, Row, Jumbotron } from "reactstrap";

function Profile() {
  const { userId } = useParams();
  const user = users.find(user => user.id == userId);
  console.log(user);
  return (
    <Container>
      <Jumbotron>
        <Row className='d-flex justify-content-center align-items-center'>
          <p
            style={{
              width: "100px",
              height: "100px",
              fontSize: "1.5em",
            }}
            className='d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md'
          >
            {user.name[0]}
          </p>
          {/* check if the user and the user.name  is truthy  */}

          <h1 className='display-3 col'>{user.name}</h1>
          {/* check if the user and the user.name  is truthy  */}

          <p className='lead text-center col'>
            {/* check if the user and the user.address  is truthy   */}
            {/* access to the nested object element  with es11 style user?.address?.street   => value of street */}
            {user.address.street} , {user.address.suite} , {user.address.city}
          </p>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Profile;
