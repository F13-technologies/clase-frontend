import React from 'react';
import { connect } from 'react-redux';

import authActions from '../../services/Auth/AuthActions';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.login('admins@gmail.com', '12345');
  }

  render() {
    const { auth } = this.props;
    return (
      <div>
        <h1>Login</h1>
        { auth.movies && 
          auth.movies.map((movie, i) => {
            return (
              <h1 key={i}>{ movie }</h1>
            )
          })
        }
        <button onClick={() => this.login()}>Iniciar sesión</button>
      </div>
    );
  }

  login(){
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  login: authActions.login
};

Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default Login;