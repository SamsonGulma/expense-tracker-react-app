//* React router DOM import
import { useLoaderData } from "react-router-dom";


//*helper Functions 
import { fetchData } from "../assets/helper"



//*Data loader: for fetching datas
export function dashboardLoader() {
  const userName = fetchData("userName");

  return { userName };
}
//*

const Dashboard = () => {
  const { userName } = useLoaderData();


  return (
    <div>
      <div>{ userName }</div>
      Dasadf
    </div>
  )
}

export default Dashboard