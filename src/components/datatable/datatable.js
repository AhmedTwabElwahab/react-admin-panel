import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import {columns,rows} from "../../data/data";

const Datatable = () =>
{
    const actionButton = [{ field: 'action', headerName: 'Action', width: 200 ,renderCell:()=>{
        return <div className="cellAction">
            <div className={'viewButton'}> view </div>
            <div className={'deleteButton'}> delete </div>
        </div>
        }},]
    return(
        <div className="datatable">
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns.concat(actionButton)}
                    pageSize={15}
                    rowsPerPageOptions={[15]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Datatable;