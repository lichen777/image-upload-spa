import * as React from "react";
import {Button, Grid, Input, TextField} from '@mui/material';

export default function Header(props) {
    const {searchInput, handleSearchInputChange, handleImageUpload} = props;
    return (
        <Grid container sx={{padding: 2}} justifyContent="space-between">
            <TextField
                autoFocus
                id="search-images" 
                size="small" 
                sx={{width: 300}} 
                label="Search images" 
                placeholder="Search images..." 
                value={searchInput}
                onChange={handleSearchInputChange}
            />
            <label htmlFor="contained-button-file">
                <Input 
                    sx={{display: 'none'}}
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    onChange={handleImageUpload}
                />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
        </Grid>
    )
}
