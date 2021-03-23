import ReactQueryProvider from "./ReactQueryProvider";
import { Row, Col, Button } from "antd";
const ReactQueryView = () => {
  return (
    <ReactQueryProvider>
      <Row gutter={16} style={{ padding: "24px" }}>
        <Col xs={24}>
          <h2>React Query View</h2>
        </Col>
        <Col xs={24}>
          {/* <Button onClick={() => users.usersActions.fetchUsersStart()}>
            Get Users
          </Button> */}
        </Col>
        <Col xs={24}></Col>
      </Row>
    </ReactQueryProvider>
  );
};

export default ReactQueryView;
