import { Row, Col, Button } from "antd";
import {useWiring,getUsers} from './wiring'

const ReactQueryView = () => {
  // wiring listens for key changes on users, error and loading
  const [{users,error,loading}] = useWiring(['users','error','loading'])

  if (error) return "An error has occurred: " + error.message;

  return (
    <Row gutter={16} style={{ padding: "24px" }}>
      <Col xs={24}>
        <h2>React Wiring View</h2>
      </Col>
      <Col xs={24}>
        <Button onClick={() => getUsers()}>
          Get Users
        </Button>
      </Col>
      <Col xs={24}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          users && users.length &&
          <ul>
            {users.map(({ name, id }) => {
              return (
                <li key={id}>
                  id: {id}, name: {name}
                </li>
              );
            })}
          </ul>
        )}
      </Col>
    </Row>
  );
};

export default ReactQueryView;
