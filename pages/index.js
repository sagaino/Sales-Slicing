import Dashboard from '../components/dashboard'
import Profile from '../components/profile'
import SideBar from '../components/sidebar'

export default function Home() {
  return (
    <div className='App'>
      <SideBar />
      <Dashboard />
      <Profile />
    </div>
  )
}
