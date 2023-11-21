import { Box } from '@mui/material'
import React from 'react'
import LatestPhotos from './LatestPhotos'
import LatestConversations from './LatestConversations'
import OnlineFriends from './OnlineFriends'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box
        width={300}
        position='fixed'
        sx={{
          top: 84,
          bottom: 0,
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: 1,
          },
        }}
      >
        <OnlineFriends />
        <LatestPhotos />
        <LatestConversations />
      </Box>
    </Box>
  )
}

export default Rightbar
