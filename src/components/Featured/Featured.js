import './Feature.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Featured()
{
    return (
        <div className='Featured'>
            <div className="top">
                <div className="title">Total Revenue</div>
                <MoreVertOutlinedIcon fontSize={'small'} />
            </div>
            <div className="bottom">
                <div className="FeaturedChart">
                    <CircularProgressbar value={60} text={'60%'}/>
                </div>
                <p className="title">Total sales</p>
                <p className="amount">$7548</p>
                <p className="des">Sale Under amount Shop All OUR SERVICES Pick Up Today Curbside </p>
                <div className="summary">
                    <div className="item">
                        <div className="title">TO DAY</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpRoundedIcon  fontSize={'small'}/>
                            <div className="amount">$15,4K</div>
                        </div>
                    </div>
                    <div className="item ">
                        <div className="title">TO WEEK</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownRoundedIcon  fontSize={'small'}/>
                            <div className="amount">$15,4K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title">to month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpRoundedIcon  fontSize={'small'}/>
                            <div className="amount">$15,4K</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
