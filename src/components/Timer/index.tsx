import React from 'react'

import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import Play from '@mui/icons-material/PlayArrow'
import Replay from '@mui/icons-material/Replay'

import useStyles from './styles'

const Timer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='h1' align='center'>
        10:00
      </Typography>
      <div className={classes.actions}>
        <IconButton aria-label='começar' color='inherit'>
          <Play fontSize='large' />
        </IconButton>
        <IconButton aria-label='reiniciar' color='inherit'>
          <Replay fontSize='large' color='inherit' />
        </IconButton>
      </div>
    </div>
  )
}

export default Timer
