import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import GridBackground from "./components/ui/GridBackground.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	// TODO => Update the uri on production
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
	credentials: "include", // This tells Apollo Client to send cookies along with every request to the server.
});


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <GridBackground>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </GridBackground>
    </BrowserRouter>
  </StrictMode>,
 
)
