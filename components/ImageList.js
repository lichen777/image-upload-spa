import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Images({data}) {
  return (
    <ImageList sx={{ width: 1600, height: 450 }}>
      {data.map((item) => (
        <ImageListItem key={item.url}>
          <img
            src={`${item.url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
