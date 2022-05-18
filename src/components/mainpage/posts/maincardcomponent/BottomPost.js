import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {Button, Grid} from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function BottomPost() {
    return (
        <CardActions disableSpacing>
            <Grid container spacing={1}>
                <Grid item xs="auto">
                    <Button variant="contained" startIcon={<FavoriteIcon/>}>
                        111
                    </Button>
                </Grid>
                <Grid item xs="auto">
                    <Button variant="contained" startIcon={<CommentIcon/>}>
                        111
                    </Button>
                </Grid>
                <Grid item xs="auto">
                    <Button variant="contained" startIcon={<ShareIcon/>}>
                        111
                    </Button>
                </Grid>
                <Grid item xs="auto" marginLeft="auto">
                    <Button variant="text" startIcon={<VisibilityIcon/>} disabled>
                        111
                    </Button>
                </Grid>
            </Grid>
        </CardActions>
    );
}