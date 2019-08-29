import { CustomTypist } from '../CustomTypist'
import React from 'react'
import './styles.css'

const Loader = (
  <div className="loader">
    <h1 className="standard-text">
      <CustomTypist
        startDelay={0}
        avgTypingDelay={150}
        stdTypingDelay={0}
        signature={false}
      >
        loading...................................
      </CustomTypist>
    </h1>
  </div>
)

export default Loader
