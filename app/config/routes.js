var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      // <Route path='/home' component={Home} />
      <IndexRoute component={Home} />
      <Route path='/playerOne' header='Player One' component={PromptContainer} />
      <Route path='/playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='battle' component={ConfirmBattleContainer} />
    </Route>
  </Router>
);

module.exports = routes;


/*
  1) A Route will be activted only when that particular url is invoked
  2) IndexRoute is something which will be there when the main route or url is invoked
*/
