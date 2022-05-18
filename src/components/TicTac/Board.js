import React from 'react'
import Square from './Square'
import './Board.css'
import {Grid} from "@mui/material";

export default function Board() {
    return (
        <div className='board'>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}>
                <Grid item xs={4}>
                    <Square num={'0'} />
                </Grid>
                <Grid item xs={4}>
                    <Square num={'1'} />
                </Grid>
                <Grid item xs={4}>
                    <Square num={'2'} />
                </Grid>
                <Grid item xs={4}>
                    <Square num={'3'} />
                </Grid>
                <Grid item xs={4}>
                    <Square num={'4'} />
                </Grid>
                <Grid item xs={4}>
                    <Square num={'5'} />
                </Grid>
                <Grid item xs={4}>
                    <Square num={'6'} />
                </Grid>
                <Grid item xs={4}>
                    <Square num={'7'} />
                </Grid>
                <Grid item xs={4}>
                    <Square num={'8'} />
                </Grid>
            </Grid>
        </div>
    )
}
