import React,{useState} from 'react'
import useLocalStorage from 'use-local-storage'
import './App.css'
import Toggle from './components/Toggle';

const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
cost [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <div className='App' data-theme={isDark?'dark':''}>
      <Toggle isChecked={isDark} handleChange={()=> setIsDark(!isDark)}/>
      <h1 className='title'>Hello world</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  )
}

export default App
