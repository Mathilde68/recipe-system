import { useState, useEffect } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import * as React from "react";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';




import RecipeDetails from "./components/RecipeDetails";
import HomeLayout from "./layouts/HomeLayout";
import DefaultLayout from "./layouts/DefaultLayout";




const router = createBrowserRouter([
  {
    path: "/", // My Root path for the homepage
    element: <HomeLayout />,  // Uses HomeLayout for the home page
  },
  {
    path: "/:id", // Path for recipe details
    element: <DefaultLayout />,  // Uses DefaultLayout for these pages
    children: [
      {
        index: true, // Defines RecipeDetails as indexed child hereof, so the path will work
        element: <RecipeDetails />,
      },
    ],
  },
]);

function App() {

  
  return <RouterProvider router={router} />;
}
export default App;
