import { useState } from "react";
import reactLogo from "./assets/react.svg";
import * as React from "react";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import Layout from "./components/Layout";
import { Heading } from "@chakra-ui/react";



const router = createBrowserRouter([
  {
    path: "/",   // Root path, using Layout as the shared component
    element: <Layout />,  
    children: [
      {
        path: "/",    // Home page
        element: 
        <>
        <Heading>Cakes & Sweets recipe collection</Heading>
        <RecipeList />
        </>
        
      },
      {
        path: "recipe/:id",   // Recipe details page
        element: <RecipeDetails />,
      },
    ],
  },
]);

function App() {
  
  return <RouterProvider router={router} />;
}
export default App;
