import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BottomPost from "./maincardcomponent/BottomPost";
import { CardActionArea } from "@mui/material";
import Modal from '@mui/material/Modal';
import BigPost from './BigPost';

export default function ImagePost() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Card>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia
                        component="img"
                        height="250"
                        image="https://natworld.info/wp-content/uploads/2019/07/Prirodnye-jekosistemy.jpg"
                        alt="Paella dish"
                    />
                </CardActionArea>
                <BottomPost />
            </Card>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BigPost />
            </Modal>
        </div>
    );
}