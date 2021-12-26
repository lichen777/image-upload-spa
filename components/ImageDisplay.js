import * as React from "react";
import {Grid, Typography} from '@mui/material';
import ImageList from './ImageList';

export default function ImageDisplay(props) {
    const {data, error} = props;

    if (error) return 'Error';
    if (!data) return 'Loading...';

    return (
        <Grid container>
            <Grid container sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom component="div">
                    {`${data.length} ${data.length > 1 ? `images` : 'image'}`}
                </Typography>
            </Grid>
            <Grid container sx={{ padding: 2 }}>
                <ImageList data={data} />
            </Grid>
        </Grid>
  )
}
