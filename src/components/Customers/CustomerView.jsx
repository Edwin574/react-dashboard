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
        .get("https://www.balldontlie.io/api/v1/players")
        .then((response) => {
          // check if the data is populated
          console.log(response.data.data);
          setData(response.data.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "first_name",
      headerName: "First Name",
      width: 100,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      width: 150,
    },
    {
      field: "position",
      headerName: "Position",
      width: 80,
    },
    {
      field: "team_name",
      headerName: "Team Name",
      width: 180,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
    },
    {
      field: "conference",
      headerName: "Conference",
      width: 100,
    },
    {
      field: "division",
      headerName: "Division",
      width: 100,
    }
  ]
  

  const rows = data.map((row) => ({
    id: row.id,
    first_name: row.first_name,
    last_name: row.last_name,
    position: row.position,
    team_name: row.team.full_name,
    city: row.team.city,
    conference: row.team.conference,
    division: row.team.division,
  }));

  return (
    <div style={{ height: "100%", width: "100%",display:'flex'}} className='flex-column'>
      <div className="d-flex">
        <div><h1>CUSTOMER DATA</h1></div>
        <div>2</div>
        <div>3</div>
      </div>
      <DataGrid
        rows={rows}
        rowHeight={25}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
   
  );
}

export default Customers;
