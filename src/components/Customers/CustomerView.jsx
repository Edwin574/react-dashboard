import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Customers() {
  const [loadData, setLoadingData] = useState(true)
  const [data, setData] = useState([])
  
  useEffect(
    () => {
      async function getData() {
        await axios.get("http://127.0.0.1:8000/easymove/customers/").then((response) => {
          console.log(response.data)
          setData(response.data)
          setLoadingData(!loadData)
        })
      }
      if (loadData) {
        // if the result is not ready so you make the axios call
        getData();
      } 
    }, []
  );

  // return (
  //   <>
  //     {loadData ? (
  //       <p>Loading Please wait...</p>
  //     ) : (
  //       <React.Fragment>
  //         {/* <Title>List of Users</Title> */}
  //         <Table size="small">
  //           <TableHead>
  //             <TableRow>
  //               <TableCell>id</TableCell>
  //               <TableCell>First Name</TableCell>
  //               <TableCell>Last Name</TableCell>
  //               <TableCell>username</TableCell>
  //               <TableCell>Email Address </TableCell>
  //               <TableCell>Country </TableCell>
  //               <TableCell>Phone Number</TableCell>
                  
  //             </TableRow>
  //           </TableHead>
  //           <TableBody>
  //             {data.map((row) => (
  //               <TableRow key={row.id}>
  //                 <TableCell>{row.id}</TableCell>
  //                 {/* <TableCell>{row.complainant[0].toString()}</TableCell> */}
  //                 <TableCell>{row.statement}</TableCell>
  //                 <TableCell>{row.location}</TableCell>
  //                 <TableCell>{row.status}</TableCell>
  //                 <TableCell>{row.complainants}</TableCell>
  //                 {/* <TableCell>{row.suspects.toString()}</TableCell>   */}
  //                 <TableCell>{row.occurrence_book_number}</TableCell>
  //                 {/* <TableCell>{row.recording_officer.toString()}</TableCell>       */}
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </React.Fragment>
  //     )}
  //   </>
  // );
}

export default Customers;
