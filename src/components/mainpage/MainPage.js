import React from "react";
import { Container, Grid, Paper, Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ImagePost from "./posts/ImagePost";
import CardStories from "./stories/CardStories";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundImage: "url(https://gamemag.ru/images/cache/News/News146952/c924d56a58-2_1390x600.jpg)",
    height: 150,
}));

export default function MainPage() {
    return (
        <Container fixed sx={{ mt: 1 }}>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}>
                <Grid item xs>
                    <Item>
                        <Grid container spacing={1}>
                            <Grid item xs="auto">
                                <Avatar
                                    sx={{
                                        width: 130,
                                        height: 150,
                                        // marginLeft: "auto",
                                        marginRight: "auto",
                                        boxShadow: "0 0 10px rgba(0,0,0,0.5)"
                                    }}
                                    src="https://papik.pro/uploads/posts/2021-09/1630739897_9-papik-pro-p-avatarki-anime-risunki-12.jpg"
                                    variant="rounded" />
                            </Grid>
                            <Grid item xs="auto">
                                <Paper elevation={3}>
                                    <Typography padding={0.5} variant="body1" gutterBottom>
                                        NICKNAME
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>
                <Grid item xs>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <Grid item xs={2}>
                            <CardStories />
                        </Grid>
                        <Grid item xs={2}>
                            <CardStories />
                        </Grid>
                        <Grid item xs={2}>
                            <CardStories />
                        </Grid>
                        <Grid item xs={2}>
                            <CardStories />
                        </Grid>
                        <Grid item xs={2}>
                            <CardStories />
                        </Grid>
                        <Grid item xs={2}>
                            <CardStories />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <ImagePost />
                        </Grid>
                        <Grid item xs={4}>
                            <ImagePost />
                        </Grid>
                        <Grid item xs={4}>
                            <ImagePost />
                        </Grid>
                        <Grid item xs={4}>
                            <ImagePost />
                        </Grid>
                        <Grid item xs={4}>
                            <ImagePost />
                        </Grid>
                        <Grid item xs={4}>
                            <ImagePost />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}