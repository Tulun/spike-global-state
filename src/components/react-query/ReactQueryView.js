import { Row, Col, Button } from "antd";
import { useQuery } from "react-query";
import userRequests from "./usersRequests";

const ReactQueryView = () => {
  const { isLoading, error, data, refetch } = useQuery(
    "users",
    userRequests.getUsers,
    { enabled: false }
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <Row gutter={16} style={{ padding: "24px" }}>
      <Col xs={24}>
        <h2>React Query View</h2>
        <Button onClick={() => refetch()}>Fetch Users</Button>
      </Col>
      <Col xs={24}>
        {isLoading ? <div>Loading...</div> : null}
        {data && data.length ? (
          <ul>
            {data.map(({ name, id }) => {
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
  );
};

export default ReactQueryView;
