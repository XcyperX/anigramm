import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BottomPost from "./maincardcomponent/BottomPost";
import CommentPost from './maincardcomponent/CommentPost';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import './BIgPost.css'

export default function BigPost() {

    return (

        <Container maxWidth="sm" sx={{ height: '100%' }}>
            <div className='element'>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Card>
                        <CardMedia
                            component="img"
                            image="https://natworld.info/wp-content/uploads/2019/07/Prirodnye-jekosistemy.jpg"
                            alt="Paella dish"
                        />
                        <BottomPost />

                    </Card>
                    <CommentPost />
                    <CommentPost />
                    <CommentPost />
                    <CommentPost />
                    <CommentPost />
                    <CommentPost />
                </Stack>
            </div>
        </Container>
    )
}