import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post id={1} />
      <Post id={2} />
      <Post id={3} />
      <Post id={4} />
      <Post id={5} />
    </Box>
  )
}

export default Feed
