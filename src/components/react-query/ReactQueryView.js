import { Row, Col, Button } from "antd";
import axios from "axios";
import { useQuery } from "react-query";

const ReactQueryView = () => {
  const { isLoading, error, data } = useQuery("users", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Row gutter={16} style={{ padding: "24px" }}>
      <Col xs={24}>
        <h2>React Query View</h2>
      </Col>
      <Col xs={24}>
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
