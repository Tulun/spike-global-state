import { from, of } from "rxjs";
import { actions } from "./postsSlice";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import axios from "axios";

// epic
// ofType watches for a particular action.
// This creates a stream of actions. After an action is called through your view (or default), define your stream of logic.
export const getPostsEpic = (action$) =>
  action$.pipe(
    ofType(actions.fetchPosts),
    mergeMap((action) => {
      return from(axios.get("https://jsonplaceholder.typicode.com/posts")).pipe(
        map((response) => actions.fetchPostsSuccess(response.data))
      );
    }),
    catchError((err) => {
      console.log(err.response);
      return of({
        type: actions.fetchPostsError.type,
        payload: "Error in call.",
        error: true,
      });
    })
  );
