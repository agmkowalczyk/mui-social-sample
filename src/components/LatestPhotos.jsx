import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'

const LatestPhotos = () => {
  return (
    <Box>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
        Latest Photos
      </Typography>
      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format'
            alt=''
          />
        </ImageListItem>
      </ImageList>
    </Box>
  )
}

export default LatestPhotos
