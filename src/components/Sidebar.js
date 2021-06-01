import {Link, withRouter} from 'react-router-dom'
import PeopleIcon from '@material-ui/icons/People';import FindInPageIcon from '@material-ui/icons/FindInPage';
import ReportIcon from '@material-ui/icons/Report';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Sidebar = ({location, showFullSidebar}) =>{
    return(
        <div className={`Sidebar ${showFullSidebar? null:'compress' }`}>
            <div className="content">
                <div>
                    <Link to={'/'} className={`sidebar-item ${location.pathname === '/'?'active': null}`}><DashboardIcon/><p className='text'>Dashboard</p></Link>
                    <Link to={'/users'} className={`sidebar-item ${location.pathname === '/users'?'active': null}`}><PeopleIcon/>  <p className='text'>Users</p></Link>
                    <Link to={'/reports'} className={`sidebar-item ${location.pathname === '/reports'?'active': null}`}><FindInPageIcon/>  <p className='text'>Reports</p></Link>
                    <Link to={'/issues'} className={`sidebar-item ${location.pathname === '/issues'?'active': null}`}><ReportIcon/>  <p className='text'>Issues</p></Link>
                </div>
                <div>
                    <Link to={'/account'} className={`sidebar-item ${location.pathname === '/account'?'active': null}`}><AccountCircleIcon/>  <p className='text'>Account</p></Link>
                    <Link to={'/settings'} className={`sidebar-item ${location.pathname === '/settings'?'active': null}`}><SettingsIcon/>  <p className='text'>Settings</p></Link>
                </div>
                
            </div>
        </div>
    )
}
export default withRouter(Sidebar)