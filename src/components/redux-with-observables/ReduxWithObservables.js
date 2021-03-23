import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions, selectPosts } from "./postsSlice";
import { Button, Row, Col } from "antd";

const ReduxWithObservables = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  // As this is done by the view, this can be put here.
  // this logic could also be moved to the slice if so desired as a Thunk.
  /*
    const fetchPosts = () => dispatch => {
      dispatch(actions.fetchPosts());
    };
  */

  const fetchPosts = useCallback(() => {
    return dispatch(actions.fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Row gutter={16} style={{ padding: "24px" }}>
        <Col xs={24}>
          <h2>Redux With Observables Route</h2>
        </Col>
        <Col xs={24}>
          <Button onClick={fetchPosts}>Get Posts</Button>
        </Col>
        <Col xs={24}>
          {posts.length ? (
            <ul>
              {posts.map(({ title, id }) => {
                return (
                  <li key={id}>
                    id: {id}, title: {title}
                  </li>
                );
              })}
              }
            </ul>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default ReduxWithObservables;
