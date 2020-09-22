import React, { useState } from 'react'
import './App.css'
import { css } from '@emotion/core'
import { Start, Join, Team } from './main'
import configObj from './config'

function App() {
  const { config } = configObj()
  // const handleChange = option => {
  //   setValue(option)
  //   Team(config.custom_game_id, option)
  // }

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          Start()
        }}
      >
        Start
      </button>
      <button
        type="button"
        onClick={() => {
          Join(config.BOT_USER_ID, config.username)
        }}
      >
        Join Game
      </button>
      {/* <select placeholder="Team" onChange={(value) => {handleChange(option)}}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
      </select> */}
    </div>
  )
}

export default App
