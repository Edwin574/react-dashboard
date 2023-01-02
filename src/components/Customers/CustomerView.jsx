import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

function Customers() {
  const [data, setData] = useState([]);

  const myData = async () => {
    await axios
      .get("https://www.balldontlie.io/api/v1/teams")
      .then((responce) => {
        setData(responce.data.data);
      });
  };
  useEffect(() => {
    myData();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
    },
    {
      field: "abbreviation",
      headerName: "Abbreviation",
      width: 150,
    },
    {
      field: "conference",
      headerName: "Conference",
      width: 150,
    },
    {
      field: "division",
      headerName: "Division",
      width: 150,
    },
    {
      field: "full_name",
      headerName: "Full Name",
      width: 150,
    },
    {
      field: "name",
      headerName: "Short Name",
      width: 150,
    },
  ];

  const rows = data.map((row) => ({
    id: row.id,
    full_name: row.full_name,
    name:row.name,
    abbreviation: row.abbreviation,
    city: row.city,
    conference: row.conference,
    division: row.division,
  }));
  console.log(data);

  return (
    <div style={{height:'100%',width:'100%'}}>
      <DataGrid rows={rows} columns={columns} pageSize={12} rowsPerPageOptions={[20] } />
    </div>
  );
}

export default Customers;
