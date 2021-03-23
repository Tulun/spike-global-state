import { combineEpics } from "redux-observable";
import { delay, filter, mapTo } from "rxjs/operators";

const pingEpic = (action$) =>
  action$.pipe(
    filter((action) => action.type === "PING"),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: "PONG" })
  );

const rootEpic = combineEpics(pingEpic);

export default rootEpic;
