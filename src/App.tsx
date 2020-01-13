import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from './app/history'
import * as routes from './routes/routes'
import Cv from "./pages/Cv/Cv"
import Registration from "./pages/Registration/Registration"
import Login from "./pages/Login/Login"
import { StoreProvider } from 'easy-peasy'
import store from './store'

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <Router history={history}>
        <Switch>
          <Route path={routes.CV} component={Cv} exact={true} />
          <Route path={routes.REGISTRATION} component={Registration} />
          <Route path={routes.LOGIN} component={Login} />
        </Switch>
      </Router>
    </StoreProvider>
  )
}

export default App;
