import React from 'react'
import Typist from 'react-typist'
import { typeistDelayGenerator } from './delayGenerator'
import '../../../node_modules/react-typist/dist/Typist.css'
import classNames from 'classnames'

interface Props {
  children: string
  callbackFn?: () => void
  startDelay?: number
  avgTypingDelay?: number
  stdTypingDelay?: number
  signature?: boolean
  whenClicked?: () => void
}

const CustomTypist = ({
  children,
  callbackFn = () => {},
  startDelay = 2000,
  avgTypingDelay = 67,
  stdTypingDelay = 32,
  signature = true,
  whenClicked,
}: Props) => {
  return (
    <div
      onClick={() => whenClicked && whenClicked()}
      className={classNames({
        clickable: Boolean(whenClicked),
      })}
    >
      <Typist
        avgTypingDelay={avgTypingDelay}
        stdTypingDelay={stdTypingDelay}
        startDelay={startDelay}
        delayGenerator={typeistDelayGenerator}
        className="standard-text standard-text--major-shadow"
        onTypingDone={() => callbackFn()}
        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 1550 }}
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
    </div>
  )
}

export { CustomTypist }
