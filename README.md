This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Notes on Routes

- "/" contains the default with Redux, Redux Toolkit (etc). The Counter Slice also has async logic that uses Thunks, which could easily be adapted to API requests.
- "/redux-with-observables" creates an example using redux-toolkit and creating a stream of Observables. This stream is defined in the postsEpic.js .
