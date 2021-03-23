import { QueryCache, ReactQueryCacheProvider } from "react-query";
const queryCache = new QueryCache();

const QueryProvider = ({ children }) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {children}
    </ReactQueryCacheProvider>
  );
};
