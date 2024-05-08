//* React router DOM import
import { useLoaderData } from "react-router-dom";


//*helper Functions 
import { fetchData } from "../assets/helper"



//*Data loader: for fetching datas
// eslint-disable-next-line react-refresh/only-export-components
export function dashboardLoader() {
  const userName = fetchData("userName");

  return { userName };
}
//*

const Dashboard = () => {
  const { userName } = useLoaderData()
  console.log(userName)

  return (
    <div>
      <div>{userName}</div>
      dashboard
    </div>
  )
}

export default Dashboard