import { useState } from 'react'
import "component-craftsman/css";
import {FunButton,Loading } from "component-craftsman"

function App() {

  return (
    <>
    <FunButton label="Button 1" btn={1} />
    <Loading loading={6} />
    </>
  )
}

export default App
