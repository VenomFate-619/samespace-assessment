import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import client from "./apolloClient.ts";
import App from "./App.tsx";
import "./index.css";
import AppContextProvider from "./context/songContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </ApolloProvider>
);
