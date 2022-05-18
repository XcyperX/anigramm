import * as React from 'react';
import '../components/mainpage/posts/BIgPost.css'
import CommentPost from '../components/mainpage/posts/maincardcomponent/CommentPost';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container, Grid, Paper, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Game from '../components/TicTac/Game';

export default function TicTacToe() {
    return (
        <Game />
    )
}