import {useState} from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'
import {PublicRoute, PrivateRoute} from './RouteTypes'
import Header from "./Header";
import Login from "./views/Login";
import Sidebar from "./Sidebar";
import Viewport from "./Viewport"
import Account from './views/Account';
import Dashboard from './views/Dashboard';
import Issues from './views/Issues';
import Reports from './views/Reports';
import Settings from './views/Settings';
import Users from './views/Users';

function App() {
    // const [authenticated, setAuthenticated] = useState(false)
    const [authenticated, setAuthenticated] = useState(true)
    const [showFullSidebar, setShowFullSidebar] = useState(true)
    return (
        <div className="App">
            <BrowserRouter>
                <Header authenticated={authenticated} setAuthenticated={setAuthenticated} setShowFullSidebar={setShowFullSidebar}  showFullSidebar={showFullSidebar}/>
                <div className="app-container">
                    {authenticated?<Sidebar showFullSidebar={showFullSidebar}/>:null}
                    <Viewport>
                        <Switch>
                            <PrivateRoute path="/" exact component={Dashboard} authenticated={authenticated}/>
                            <PublicRoute path="/login" exact component={Login} authenticated={authenticated}/>
                            <PrivateRoute path='/users' component={Users} authenticated={authenticated} />
                            <PrivateRoute path='/reports' component={Reports} authenticated={authenticated} />
                            <PrivateRoute path='/issues' component={Issues} authenticated={authenticated} />
                            <PrivateRoute path='/settings' component={Settings} authenticated={authenticated} />
                            <PrivateRoute path='/account' component={Account} authenticated={authenticated} />
                        </Switch>
                    </Viewport>
                </div>
                
            </BrowserRouter>
            
        </div>
    );
}

export default App;
