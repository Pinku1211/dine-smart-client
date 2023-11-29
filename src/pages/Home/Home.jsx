import { Helmet } from "react-helmet-async"
import Banner from "./Banner"
import Membership from "./Membership"
import TabSection from "./tabSection"

const Home = () => {
  return (
    <div>
      <Helmet><title>DineSmart | Home</title></Helmet>
      <Banner></Banner>
      <TabSection></TabSection>
      <Membership></Membership>
    </div>
  )
}

export default Home
