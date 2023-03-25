import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ListIcon from '@mui/icons-material/List';
import IMG from '../../images/person.jpg'
function Navbar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder={'Search...'}/>
                    <SearchIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon/> ar
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon/>
                    </div>
                    <div className="item">
                        <NotificationsOutlinedIcon/>
                        <div className="counter">5</div>
                    </div>
                    <div className="item">
                        <AccountCircleOutlinedIcon/>
                    </div>
                    <div className="item">
                        <ListIcon/>
                    </div>
                    <div className="item">
                        <img src={IMG} alt={'userPicture'} className={'avatar'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
