import React from "react";
import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit, Preview } from '@mui/icons-material';




function CustomerActions() {
    
    return (
        <Box>
      <Tooltip title="View customer details">
        <IconButton
          onClick={() =>({})}
        >
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit this Customer">
        <IconButton onClick={{}}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this customer">
        <IconButton
          onClick={() =>{}}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
    )
}

export default CustomerActions