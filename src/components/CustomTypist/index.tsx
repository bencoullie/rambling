import React from 'react'
import Typist from 'react-typist'
import { typeistDelayGenerator } from './delayGenerator'
import '../../../node_modules/react-typist/dist/Typist.css'

interface Props {
  children: string
  callbackFn?: () => void
  startDelay?: number
  avgTypingDelay?: number
  stdTypingDelay?: number
  signature?: boolean
}

const CustomTypist = ({
  children,
  callbackFn = () => {},
  startDelay = 2000,
  avgTypingDelay = 67,
  stdTypingDelay = 32,
  signature = true,
}: Props) => (
  <Typist
    avgTypingDelay={avgTypingDelay}
    stdTypingDelay={stdTypingDelay}
    startDelay={startDelay}
    delayGenerator={typeistDelayGenerator}
    className="standard-text"
    onTypingDone={() => callbackFn()}
  >
    {children}
    {signature && (
      <span>
        <Typist.Delay ms={800} />
        <br />
        <br />
        No need to reply.
      </span>
    )}
  </Typist>
)

export { CustomTypist }
