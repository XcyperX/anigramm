import React, { useState } from 'react'
import './Game.css'
import Board from './Board'
import './Logic'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { startGame } from './Logic';

export default function Game() {
    return (
        <div>
            <div className='weapper'>
                <Stack spacing={1} sx={{ mb: 2 }}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-1-demo"
                        disableClearable
                        options={role.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Играть за...."
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />
                    <Button variant="contained" onClick={startGame}>Начать игру</Button>
                </Stack>
                <Board />
            </div>

        </div>


    )
}

const role = [
    { title: 'Крестики' },
    { title: 'Нолики' }
]
