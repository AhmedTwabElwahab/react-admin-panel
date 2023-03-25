import './chart.scss';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'Jan',
        Total: 4000,
    },
    {
        name: 'Feb',
        Total: 6000,
    },
    {
        name: 'Mar',
        Total: 4500,
    },
    {
        name: 'Apr',
        Total: 5900,
    },
    {
        name: 'May',
        Total: 4900,
    },
    {
        name: 'Jun',
        Total: 7900,
    },
];

function Chart()
{
    return (
        <div className='Chart'>
            <div className="title">
                last Week
            </div>
            <ResponsiveContainer width="100%" aspect={2/1}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
