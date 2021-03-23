import { useContext } from "react";
import { UsersContext } from "./usersContext";
import { Row, Col, Button } from "antd";
import useObservable from "./useObservable";
import { users$ } from "./usersObservables";

const ContextWithObservables = () => {
  const users = useContext(UsersContext);
  console.log("users", users);

  return (
    <div>
      <Row gutter={16} style={{ padding: "24px" }}>
        <Col xs={24}>
          <h2>Context With Observables Route</h2>
        </Col>
        <Col xs={24}>
          <Button onClick={() => users.usersActions.fetchUsers()}>
            Get Users
          </Button>
        </Col>
        <Col xs={24}>
          {users.usersState.users.length ? (
            <ul>
              {users.usersState.users.map(({ name, id }) => {
                return (
                  <li key={id}>
                    id: {id}, name: {name}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default ContextWithObservables;
