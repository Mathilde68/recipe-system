import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import RecipeList from './components/recipeList'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
     <RecipeList />
    </ChakraProvider>
  )
}
export default App
