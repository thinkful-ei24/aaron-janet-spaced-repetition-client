import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Intro from './intro';
import RegisterPage from './register-landing-page';
import LoginPage from './login-landing-page';
import HeaderBar from './header-bar';
import Footer from './footer';
export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <HeaderBar className="header-bar" />
      <div className="home">
        <Intro />
        <LoginPage />
        <RegisterPage />
        <Footer />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
