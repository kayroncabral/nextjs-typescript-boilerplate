import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.contrastText
  },
  main: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  settings: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  pomodoro: {
    background: `${theme.palette.primary.light}`,
    transition: theme.transitions.create(['background', 'color'])
  },
  interval: {
    background: `${theme.palette.secondary.light}`,
    transition: theme.transitions.create(['background', 'color'])
  }
}))

export default useStyles
