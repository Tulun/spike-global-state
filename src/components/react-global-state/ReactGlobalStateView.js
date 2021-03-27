import React from 'react'
import { Row, Col, Button } from "antd";
import {useGlobalState} from './useGlobalState'
import {getUsers} from './utils'

const ReactQueryView = () => {
  const {dispatch,state:{error,users,loading}} = useGlobalState()

  if (error) return "An error has occurred: " + error.message;

  return (
    <Row gutter={16} style={{ padding: "24px" }}>
      <Col xs={24}>
        <h2>React Wiring View</h2>
      </Col>
      <Col xs={24}>
        <Button onClick={getUsers(dispatch)}>
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
