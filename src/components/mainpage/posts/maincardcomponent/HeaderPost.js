import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {red} from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function HeaderPost() {
    return(
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} variant="rounded">
                    R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
    );
}