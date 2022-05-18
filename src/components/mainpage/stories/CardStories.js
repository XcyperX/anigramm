import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardStories() {
    return(
        <Card >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="110"
                    image="https://cs10.pikabu.ru/post_img/big/2020/05/22/11/1590174280160932814.jpg"
                    alt="green iguana"
                />
                <CardContent sx={{padding: 0.5}}>
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                        Прикол
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}