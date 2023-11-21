import React from 'react'
import { Avatar, AvatarGroup, Typography } from '@mui/material'

const OnlineFriends = () => {
  return (
    <>
      <Typography variant='h6' fontWeight={100}>
        Online friends
      </Typography>
      <AvatarGroup max={7}>
        <Avatar
          alt='Remy Sharp'
          src='https://mui.com/static/images/avatar/1.jpg'
        />
        <Avatar
          alt='Travis Howard'
          src='https://mui.com/static/images/avatar/2.jpg'
        />
        <Avatar alt='Cindy Baker' src='' />
        <Avatar
          alt='Agnes Walker'
          src='https://mui.com/static/images/avatar/4.jpg'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://mui.com/static/images/avatar/5.jpg'
        />
        <Avatar
          alt='Remy Sharp'
          src='https://mui.com/static/images/avatar/3.jpg'
        />
        <Avatar
          alt='Travis Howard'
          src='https://mui.com/static/images/avatar/2.jpg'
        />
        <Avatar
          alt='Cindy Baker'
          src='https://mui.com/static/images/avatar/3.jpg'
        />
        <Avatar
          alt='Agnes Walker'
          src='https://mui.com/static/images/avatar/4.jpg'
        />
      </AvatarGroup>
    </>
  )
}

export default OnlineFriends
