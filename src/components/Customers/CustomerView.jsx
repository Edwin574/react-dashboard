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
        .get("http://127.0.0.1:8000/easymove/customers/")
        .then((response) => {
          // check if the data is populated
          console.log(response.data.results);
          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  // const myData = async () => {
  //   await axios
  //     .get("http://127.0.0.1:8000/easymove/customers/")
  //     .then((responce) => {
  //       console.log(responce);
  //     });
  // };
  // useEffect(() => {
  //   myData();
  // }, []);
  // console.log(data);

  // const columns = [
  //   {
  //     field: "id",
  //     headerName: "ID",
  //     width: 50,
  //   },
  //   {
  //     field: "city",
  //     headerName: "City",
  //     width: 100,
  //   },
  //   {
  //     field: "abbreviation",
  //     headerName: "Abbreviation",
  //     width: 150,
  //   },
  //   {
  //     field: "conference",
  //     headerName: "Conference",
  //     width: 150,
  //   },
  //   {
  //     field: "division",
  //     headerName: "Division",
  //     width: 150,
  //   },
  //   {
  //     field: "full_name",
  //     headerName: "Full Name",
  //     width: 150,
  //   },
  //   {
  //     field: "name",
  //     headerName: "Short Name",
  //     width: 150,
  //   },
  // ];

  // const rows = data.map((row) => ({
  //   id: row.id,
  //   full_name: row.full_name,
  //   name: row.name,
  //   abbreviation: row.abbreviation,
  //   city: row.city,
  //   conference: row.conference,
  //   division: row.division,
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
