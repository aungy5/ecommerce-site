import './App.css';
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer'
import About from '../src/pages/about'
import Login from '../src/pages/login'
import Contact from '../src/pages/contact'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <div>
          <Header/>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Footer/>
          </div>
      </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
