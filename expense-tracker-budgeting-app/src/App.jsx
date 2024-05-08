import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//////*routes import starts here!//////
import Dashboard from "./assets/allPages/Dashboard";

//////*routes import ends here!//////



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
