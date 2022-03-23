import React from "react";
import { Container, Row } from "reactstrap";
import UserCard from "./UserCard";
import { users } from "../data/users";

function ListUsers() {
  return (
    <Container>
      <Row>
        {users.map(user => (
          <UserCard user={user} key={user.id} />
        ))}
      </Row>
    </Container>
  );
}

export default ListUsers;
