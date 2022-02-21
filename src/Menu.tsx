// import { Fragment, useEffect, useRef, useState } from 'react'
import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import { blue, lime, pink } from '@mui/material/colors';
import Chip from '@mui/material/Chip';

import './App.css'

export default function Example() {
  return (
      <Stack spacing={2}>
        <Chip 
        sx={{ bgcolor: lime[500] }}
        avatar={
            <Avatar sx={{ bgcolor: blue[500] }}>
                <ManIcon />
            </Avatar>
        } 
        label="Host-Kun" 
        />
        <Chip 
        sx={{ bgcolor: lime[500] }}
        avatar={
            <Avatar sx={{ bgcolor: pink[500] }}>
                <WomanIcon />
            </Avatar>
        } 
        label="Hostess-Qiu" 
        />
    </Stack>
  )
}

