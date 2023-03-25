import './home.scss';
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from "../../components/Featured/Featured";
import Chart from '../../components/chart/Chart';
import TransactionList from '../../components/transaction/Transaction';

function Home() {
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget/>
                    <Widget/>
                    <Widget/>
                    <Widget/>
                </div>
                <div className="featureSection">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    <div className="title">Last transactions</div>
                    <TransactionList />
                </div>
            </div>
        </div>
    );
}

export default Home;
