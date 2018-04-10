import * as React from 'react';
import * as Scrivito from 'scrivito';
import CurrentPageMetaData from './Components/CurrentPageMetaData';
import ErrorBoundary from './Components/ErrorBoundary';
import Footer from './Components/Footer';
import GoogleAnalytics from './Components/GoogleAnalytics';
import Intercom from './Components/Intercom';
import Navigation from './Components/Navigation';
import NotFoundErrorPage from './Components/NotFoundErrorPage';

function ScrivitoApp() {
  return (
    <ErrorBoundary>
      <div>
        <div className="content-wrapper">
          <Navigation />
          <Scrivito.CurrentPage />
          <NotFoundErrorPage />
        </div>
        <Footer />
        <CurrentPageMetaData />
        <GoogleAnalytics />
        <Intercom />
      </div>
    </ErrorBoundary>
  );
}

function ExternalApp({ path }) {
  return (
    <div>
      EXTERNAL APP
      <br />
      { path }
      <a href="/">TO ROOT</a>
      <a href="/2-external-app">TO 2. External App</a>
    </div>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    this.props.history.listen((location, action) => {
      if (action === 'POP') {
        this.setState({ location: location.pathname });
      }

      if (action === 'REPLACE') {
        this.setState({ location: location.pathname });
      }

      if (action === 'PUSH') {
        this.setState({ location: location.pathname });
      }
    });

    this.setState({ location: this.props.history.location });
  }

  render() {
    if (!this.state || !this.state.location) {
      return null;
    }

    if (this.state.location.pathname === '/external-app') {
      return <ExternalApp path={ this.state.location.pathname }/>;
    }

    if (this.state.location.pathname === '/2-external-app') {
      return <ExternalApp path={ this.state.location.pathname }/>;
    }

    return <ScrivitoApp />;
  }

}