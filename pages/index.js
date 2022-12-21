import React, {useState} from 'react'

import tw from 'twin.macro'
import { Button, Logo } from './../components'
import { Box, Heading } from 'rebass'

import { MotionConfig } from 'framer-motion'
import "./index.module.css"


const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-primary to-secondary`,
  ],
}

const IndexPage = () => {
  const [open, setOpen] = React.useState(false)
  return (
  <MotionConfig
  transition={{
    type: 'spring',
    damping: 20,
    stiffness: 300,
  }}
>
  <div css={styles.container({ hasBackground: true })}>
<Heading 
tw="font-sans font-black text-white/90"
fontSize={['4.5rem', '6rem', '7rem']}
>Come adopt my <span className="">cute</span> ass <span className="">kittens</span></Heading>


    <Logo />

 
  </div>
  </MotionConfig>
)
}
export default IndexPage
