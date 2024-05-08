//*helper Functions 
import { fetchData } from "../helper"

//*Data loader: for fetching datas
export function dashboardLoader() {
  const userName = fetchData("userName");

  return { userName };
}


const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard