import React from 'react'
import Typist from 'react-typist'
import { typeistDelayGenerator } from './delayGenerator'
import '../../../node_modules/react-typist/dist/Typist.css'

interface Props {
  children: string
  callbackFn: () => void
}

const CustomTypist = ({ children, callbackFn }: Props) => (
  <Typist
    avgTypingDelay={67}
    stdTypingDelay={32}
    startDelay={2000}
    delayGenerator={typeistDelayGenerator}
    className="standard-text"
    onTypingDone={() => callbackFn()}
  >
    {children}
    <Typist.Delay ms={800} />
    <br />
    <br />
    No need to reply.
  </Typist>
)

export { CustomTypist }
