import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <root />,
  },
]);

function App() {

  return <div className="App"> 
      <RouterProvider router={router} />
  </div>
    
  
}

export default App
