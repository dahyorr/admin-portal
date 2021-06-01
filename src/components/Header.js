import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import LinearProgress from '@material-ui/core/LinearProgress';

const Header = ({authenticated, setAuthenticated, setShowFullSidebar, showFullSidebar}) =>{
    return(
        <div className="Header">
            <div className="container">
                <div className="header-left">
                    {authenticated?
                    <IconButton onClick={() => setShowFullSidebar(!showFullSidebar)} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>: null}
                    <div className="brand">Admin Portal</div>
                </div>
                <div>
                    <button 
                        className='btn btn-white' 
                        onClick={() => setAuthenticated(!authenticated)}
                    >{authenticated? 'Logout': 'Login'}</button>
                </div>
            </div>
            {/* <Line   arProgress color="primary" /> */}
        </div>

    )
}
export default Header