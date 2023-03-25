import './widget.scss';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
function Widget()
{
    return (
        <div className='widget'>
            <div className='left'>
                <div className="title">users</div>
                <div className="counter">48753</div>
                <div className="link">see all users</div>
            </div>
            <div className={'right'}>
                <div className={'percentage positive'}>
                    <ArrowUpwardOutlinedIcon className={'icon'}/>
                    30%
                </div>

                <PersonOutlineOutlinedIcon className={'icon'}/>
            </div>
        </div>
    );
}

export default Widget;
