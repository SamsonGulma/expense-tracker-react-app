import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./assets/allPages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
]);

function App() {

  return <div className="App"> 
      <RouterProvider router={router} />
  </div>
    
  
}

export default App
