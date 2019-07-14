
import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/es';

import Login from './Login/Login';

class Routes extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
		moment.locale('es');
	}

	render() {
		return (
    <Router>
			<div>
					<Switch className="h-100">
						<Route exact path="/" component={Login} />
						<Route path="/login" component={Login} />
					</Switch>
			</div>
    </Router>
    )
	}
}

const mapDispatchToProps = {
};

function mapStateToProps(state) {
	return {
	}
};

Routes = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Routes);

export default Routes;