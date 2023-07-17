import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import client from "./apolloClient.ts";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
