import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./customerView.css";
// import Cards from "../Cards/Cards";


export const userDummy = [
  {
    id: 1,
    first_name: "Glori",
    last_name: "Restill",
    username: "grestill0",
    email: "grestill0@nps.gov",
    country: "UG",
    phone_number: "1791118936",
    password: "bKOQW8ut",
  },
  {
    id: 2,
    first_name: "Bryn",
    last_name: "Roze",
    username: "broze1",
    email: "broze1@bizjournals.com",
    country: "UG",
    phone_number: "2572396804",
    password: "8LMsrvEaD3",
  },
  {
    id: 3,
    first_name: "Ronna",
    last_name: "Glasspoole",
    username: "rglasspoole2",
    email: "rglasspoole2@g.co",
    country: "SS",
    phone_number: "3843001139",
    password: "Hq01NpJ",
  },
  {
    id: 4,
    first_name: "Eustace",
    last_name: "Simison",
    username: "esimison3",
    email: "esimison3@nih.gov",
    country: "CD",
    phone_number: "9655713635",
    password: "MoIhl4",
  },
  {
    id: 5,
    first_name: "Misti",
    last_name: "Darco",
    username: "mdarco4",
    email: "mdarco4@cdc.gov",
    country: "BI",
    phone_number: "6188187182",
    password: "kX0IWStCLRo",
  },
  {
    id: 6,
    first_name: "Crissy",
    last_name: "Cornes",
    username: "ccornes5",
    email: "ccornes5@unicef.org",
    country: "SS",
    phone_number: "7786380470",
    password: "B1Cpl1bDFF",
  },
  {
    id: 7,
    first_name: "Tiebold",
    last_name: "Guiet",
    username: "tguiet6",
    email: "tguiet6@usatoday.com",
    country: "TZ",
    phone_number: "4181768654",
    password: "AIdenIPWs",
  },
  {
    id: 8,
    first_name: "Valencia",
    last_name: "Meredith",
    username: "vmeredith7",
    email: "vmeredith7@wired.com",
    country: "UG",
    phone_number: "6656501635",
    password: "8xvh87F",
  },
  {
    id: 9,
    first_name: "Creight",
    last_name: "Ager",
    username: "cager8",
    email: "cager8@istockphoto.com",
    country: "UG",
    phone_number: "1622373470",
    password: "eMNPd5",
  },
  {
    id: 10,
    first_name: "Tybi",
    last_name: "Style",
    username: "tstyle9",
    email: "tstyle9@csmonitor.com",
    country: "UG",
    phone_number: "2157233842",
    password: "sZN0tFUb",
  },
  {
    id: 11,
    first_name: "Adolphus",
    last_name: "Gorch",
    username: "agorcha",
    email: "agorcha@bizjournals.com",
    country: "CD",
    phone_number: "5981227030",
    password: "32GGNXmHBAba",
  },
  {
    id: 12,
    first_name: "Baudoin",
    last_name: "Gracey",
    username: "bgraceyb",
    email: "bgraceyb@spotify.com",
    country: "UG",
    phone_number: "2428233702",
    password: "Y5cnfi",
  },
  {
    id: 13,
    first_name: "Pammi",
    last_name: "Merit",
    username: "pmeritc",
    email: "pmeritc@yolasite.com",
    country: "UG",
    phone_number: "1763177393",
    password: "HC5PfMW",
  },
  {
    id: 14,
    first_name: "Mickie",
    last_name: "Batstone",
    username: "mbatstoned",
    email: "mbatstoned@fda.gov",
    country: "SS",
    phone_number: "6527324669",
    password: "NHAmbyDh",
  },
  {
    id: 15,
    first_name: "Donny",
    last_name: "Kinavan",
    username: "dkinavane",
    email: "dkinavane@mac.com",
    country: "SS",
    phone_number: "5375264290",
    password: "T7F30d0dCN",
  },
  {
    id: 16,
    first_name: "Kristan",
    last_name: "Hughman",
    username: "khughmanf",
    email: "khughmanf@merriam-webster.com",
    country: "CD",
    phone_number: "9709800891",
    password: "ki6RueN8JDx",
  },
  {
    id: 17,
    first_name: "Brittan",
    last_name: "McNickle",
    username: "bmcnickleg",
    email: "bmcnickleg@latimes.com",
    country: "UG",
    phone_number: "2261773735",
    password: "qqeh9Wa0GNTt",
  },
  {
    id: 18,
    first_name: "Dyna",
    last_name: "Tesseyman",
    username: "dtesseymanh",
    email: "dtesseymanh@elpais.com",
    country: "CD",
    phone_number: "7359444811",
    password: "mFZFiqnVt69g",
  },
  {
    id: 19,
    first_name: "Murray",
    last_name: "Harfleet",
    username: "mharfleeti",
    email: "mharfleeti@un.org",
    country: "UG",
    phone_number: "2975782997",
    password: "UaDivD",
  },
];

function Customers() {
  // const [loadData, setLoadingData] = useState(true)
  // const [data, setData] = useState([])

  // useEffect(
  //   () => {
  //     async function getData() {
  //       await axios.get("http://127.0.0.1:8000/easymove/customers/").then((response) => {
  //         console.log(response.data)
  //         setData(response.data)
  //         setLoadingData(!loadData)
  //       })
  //     }
  //     // if (loadData) {
  //     //   // if the result is not ready so you make the axios call
  //     //   getData();
  //     // }
  //   }, []
  // );

  return (
    // <h1>hello</h1>
    // <>
    //   {loadData ? (
    //     <p>Loading Please wait...</p>
    //   ) : (
    <>
      <div className="customertable">
        <div className="dummydiv">
          <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit vero tempora nesciunt, quae id modi.</p>
          </div>
          <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit vero tempora nesciunt, quae id modi.</p>
          </div>
          <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit vero tempora nesciunt, quae id modi.</p>
          </div>
        </div>
        <React.Fragment>
          {/* <Title>List of Users</Title> */}
          <Table size="small"  sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>username</TableCell>
                <TableCell>Email Address </TableCell>
                <TableCell>Country </TableCell>
                <TableCell>Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userDummy.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  {/* <TableCell>{row.complainant[0].toString()}</TableCell> */}
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  {/* <TableCell>{row.suspects.toString()}</TableCell>   */}
                  <TableCell>{row.country}</TableCell>
                  <TableCell>{row.phone_number}</TableCell>
                  {/* <TableCell>{row.recording_officer.toString()}</TableCell>       */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
        {/* )} */}
      </div>
    </>
  );
}

export default Customers;
