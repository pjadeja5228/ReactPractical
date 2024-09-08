import { useSelector } from 'react-redux'
import './App.css'
import Login from './pages/Login'
import MainWrap from './components/wrap/MainWrap'
import HomePage from './pages/HomePage'
import { handlePage } from './components/Common'
import Utils from './components/Utils';

const App = () => {
  handlePage()
  return (
    <MainWrap>
      <Render />
    </MainWrap>
  )
}
const Render = () => {
  const Active = useSelector((state) => state.Users.LoginUser);
  Utils.handleLoginBodyColor(Active === null);
  if (Active !== null) {
    return <HomePage />
  } else {
    return <Login />
  }
}
export default App
