import React from "react";
import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit, Preview } from '@mui/icons-material';




function CustomerActions() {
    
    return (
        <Box>
      <Tooltip title="View customer details">
        <IconButton
          
        >
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit this Customer">
        <IconButton >
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this customer">
        <IconButton
          
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
    )
}

export default CustomerActions