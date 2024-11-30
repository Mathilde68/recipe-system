import { useState } from "react";
import reactLogo from "./assets/react.svg";
import * as React from "react";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';




import RecipeDetails from "./components/RecipeDetails";
import HomeLayout from "./layouts/HomeLayout";
import DefaultLayout from "./layouts/DefaultLayout";




const router = createBrowserRouter([
  {
    path: "/", // Root path for the homepage
    element: <HomeLayout />,  // Use HomeLayout for the home page
  },
  {
    path: "/recipe/:id", // Path for recipe details
    element: <DefaultLayout />,  // Use DefaultLayout for other pages
    children: [
      {
        index: true, // Recipe details page
        element: <RecipeDetails />,
      },
    ],
  },
]);

function App() {
  
  return <RouterProvider router={router} />;
}
export default App;
