import React from 'react'

import Head from 'next/head'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import Timer from 'components/Timer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Container component='main'>
        <Typography align='center'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </Typography>
        <Timer />
      </Container>
    </div>
  )
}
