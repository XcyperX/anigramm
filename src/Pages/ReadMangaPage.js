import * as React from 'react';
import { styled } from '@mui/material/styles';
import '../components/mainpage/posts/BIgPost.css'
import CommentPost from '../components/mainpage/posts/maincardcomponent/CommentPost';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container, Grid, Paper, Stack } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ReadMangaPage() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Container fixed sx={{ mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Autocomplete
                                        freeSolo
                                        id="free-solo-1-demo"
                                        disableClearable
                                        options={tome.map((option) => option.title)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Том"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Autocomplete
                                        freeSolo
                                        id="free-solo-2-demo"
                                        disableClearable
                                        options={part.map((option) => option.title)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Глава"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <Stack
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Typography variant="h6" align='left' component="div" className='truncate'>
                                            Пограничная жизнь целителя и его любимой дочери
                                        </Typography>
                                        <Typography variant="body1" align='left' component="div" className='truncate'>
                                            Ossan Teihen Chiyushi to Mana Musume no Henkyou Raifu gggfgdfgdfgd 
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={8}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                    >

                        <Card sx={{ width: '100%' }}>
                            <CardMedia
                                component="img"
                                image="https://gen.jut.su/uploads/manga/663/001.png"
                                alt="Paella dish"
                            />
                        </Card>
                        <Card sx={{ width: '100%' }}>
                            <CardMedia
                                component="img"
                                image="https://gen.jut.su/uploads/manga/663/001.png"
                                alt="Paella dish"
                            />
                        </Card>
                        <Card sx={{ width: '100%' }}>
                            <CardMedia
                                component="img"
                                image="https://gen.jut.su/uploads/manga/663/001.png"
                                alt="Paella dish"
                            />
                        </Card>
                        <Card sx={{ width: '100%' }}>
                            <CardMedia
                                component="img"
                                image="https://gen.jut.su/uploads/manga/663/001.png"
                                alt="Paella dish"
                            />
                        </Card>
                    </Stack>

                </Grid>
                <Grid item xs={4}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <CommentPost />
                        <CommentPost />
                        <CommentPost />
                        <CommentPost />
                        <CommentPost />
                        <CommentPost />
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

const tome = [
    { title: 'Том 1', year: 1994 },
    { title: 'Том 2', year: 1972 },
    { title: 'Том 3', year: 1974 },
    { title: 'Том 4', year: 2008 }
]

const part = [
    { title: 'Глава 1. Сильнейший мудрец проходит экзамен.', year: 1994 },
    { title: 'Глава 2. Сильнейший мудрец присматривает себе компаньонов.', year: 1972 },
    { title: 'Глава 3. Учения сильнейшего мудреца.', year: 1974 },
    { title: 'Глава 4. Сильнейший мудрец присматривает себе компаньонов.', year: 2008 }
]