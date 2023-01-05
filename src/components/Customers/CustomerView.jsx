import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

function Customers() {
  // const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("http://127.0.0.1:8000/auth/users")
        .then((response) => {
          // check if the data is populated
          console.log(response.data);
          setData(response.data.results);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  // const columns = [
  //   {
  //     field: "id",
  //     headerName: "ID",
  //     width: 50,
  //   },
  //   {
  //     field: "address",
  //     headerName: "Address",
  //     width: 150,
  //   },
  //   {
  //     field: "birth_date",
  //     headerName: "DOB",
  //     width: 150,
  //   },
  //   {
  //     field: "sex",
  //     headerName: "Gender",
  //     width: 100,
  //   }]
  

  // const rows = data.map((row) => ({
  //   id: row.id,
  //   address: row.address,
  //   birth_date: row.birth_date,
  //   sex: row.sex,
  // }));

  return (
    // <div style={{ height: "100%", width: "100%",display:'flex'}} className='flex-column'>
    //   <div className="d-flex">
    //     <div>1</div>
    //     <div>2</div>
    //     <div>3</div>
    //   </div>
    //   <DataGrid
    //     rows={rows}
    //     columns={columns}
    //     pageSize={10}
    //     rowsPerPageOptions={[10]}
    //   />
    // </div>
    <div></div>
  );
}

export default Customers;
