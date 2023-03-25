import './transaction.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    id:number,
    name: string,
    status: string,
    value: number,
    date: string,
) {
    return {id ,name, status, value, date};
}

const rows = [
    createData( 15,'Frozen yoghurt','active', 6000, "20/10/2022"),
    createData( 16,'Frozen','active', 4000, "23/11/2022"),
    createData( 17,'yoghurt','disable', 5000, "05/10/2022"),
    createData( 18,'test yoghurt','active', 7000, "20/12/2022"),
    createData( 19,'ali frah','disable', 9000, "09/11/2022"),

];

function TransactionList() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right ">Name</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Value</TableCell>
                        <TableCell align="right">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right" className={'tableCell'}>{row.name}</TableCell>
                            <TableCell align="right" className={'tableCell'}>
                                <span className={`status ${row.status}`}>
                                     {row.status}
                                </span>
                            </TableCell>
                            <TableCell align="right" className={'tableCell'}>{row.value}</TableCell>
                            <TableCell align="right" className={'tableCell'}>{row.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TransactionList;
