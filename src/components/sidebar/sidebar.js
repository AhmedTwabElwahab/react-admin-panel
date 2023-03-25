import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className={'top'}>
                <Link to={'/'} style={{textDecoration:'none'}}>
                    <span className={'logo'}>LOGO</span>
                </Link>
            </div>
            <hr/>
            <div className={'center'}>
                <ul>
                    <li>
                        <DashboardIcon className='icon'/>
                        <Link to={'/'} style={{textDecoration:'none'}}>
                            <span>Dashboord</span>
                        </Link>
                    </li>
                    <p className="title">
                        products
                    </p>
                    <li>
                        <WidgetsOutlinedIcon className='icon'/>
                        <Link to={'/products'} style={{textDecoration:'none'}}>
                            <span>products</span>
                        </Link>
                    </li>
                    <li>
                        <Inventory2OutlinedIcon className='icon'/>
                        <Link to={'/products/new'} style={{textDecoration:'none'}}>
                            <span>add product</span>
                        </Link>
                    </li>
                    <p className="title">
                        sales
                    </p>
                    <li>
                        <MonetizationOnOutlinedIcon className='icon'/>
                        <span>sales</span>
                    </li>
                    <li>
                        <ReceiptIcon className='icon'/>
                        <span>add sale invoice</span>
                    </li>
                    <li>
                        <PeopleAltOutlinedIcon className='icon'/>
                        <span>Client</span>
                    </li>
                    <p className="title">
                        purchases
                    </p>
                    <li>
                        <AddShoppingCartOutlinedIcon className='icon'/>
                        <span>purchases</span>
                    </li>
                    <li>
                        <StorefrontOutlinedIcon className='icon' />
                        <span>suppliers</span>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <Link to={'/users'} style={{textDecoration:'none'}}>
                            <span>users</span>
                        </Link>
                    </li>
                    <p className="title">
                        Settings
                    </p>
                    <li>
                        <SettingsOutlinedIcon className='icon'/>
                        <span>Settings</span>
                    </li>

                </ul>
            </div>

            <div className='bottom'>
                <div className="colorOption"/>
                <div className="colorOption"/>
                <div className="colorOption"/>
            </div>
        </div>
    );
}

export default Sidebar;
