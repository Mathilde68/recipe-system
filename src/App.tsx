import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
     <h1>Hello there</h1>
    </ChakraProvider>
  )
}
export default App
