import { combineEpics } from "redux-observable";
import { getPostsEpic } from "components/redux-with-observables/postsEpic";

const rootEpic = combineEpics(getPostsEpic);

export default rootEpic;
