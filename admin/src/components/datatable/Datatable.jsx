import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatableSource';
import { Link } from 'react-router-dom';


function Datatable() {

    const actionColumn = [
        {
        field: "action", headerName: "Action", width: 200, 
        renderCell: ()=> {
            return (
                <div className='cellAction'>
                    <Link to="/users/new" style={{textDecoration: "none"}}>
                        <div className='viewButton'>View</div>
                    </Link>
                    
                    <div className='deleteButton'>Delete</div>
                </div>
            )
          }  
        }
    ];

  return (
    <div className='datatable'>
        <div className="datatableTitle">
            Add new user
            <Link className='addUserButton' to="/users/new" style={{textDecoration: "none"}}>
                Add new
            </Link>
        </div>
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable