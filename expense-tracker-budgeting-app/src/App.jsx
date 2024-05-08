import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//////*routes import

import Dashboard, {Loader} from "./otherPages/Dashboard";
import Error from "./otherPages/Error";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: Loader,
    errorElement: <Error />
  },
  {
    path: "*",
    element: <Error />
  }
]);

function App() {

  return <div className="App"> 
      <RouterProvider router={router} />
  </div>
    
  
}

export default App
