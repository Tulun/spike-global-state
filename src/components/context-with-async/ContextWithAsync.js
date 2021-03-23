import { useContext, useEffect } from "react";
import { UsersContext } from "./usersContext";
import { Row, Col, Button } from "antd";

const ContextWithObservables = () => {
  const users = useContext(UsersContext);

  useEffect(() => {
    if (users && users.usersState.fetching) {
      users.usersActions.fetchUsers();
    }
  }, [users]);

  return (
    <div>
      <Row gutter={16} style={{ padding: "24px" }}>
        <Col xs={24}>
          <h2>Context With Observables Route</h2>
        </Col>
        <Col xs={24}>
          <Button onClick={() => users.usersActions.fetchUsersStart()}>
            Get Users
          </Button>
        </Col>
        {users.usersState.fetching ? (
          <div>Loading...</div>
        ) : (
          <Col xs={24}>
            {users && users.usersState.users.length ? (
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
        )}
      </Row>
    </div>
  );
};

export default ContextWithObservables;
