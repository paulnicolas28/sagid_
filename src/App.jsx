import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard2 from './pages/Dashboard2'
import MainLayout from './layout/MainLayout'
import UserRegistrationForm from './form/UserRegistrationForm'
import ChoixPlan from './form/ChoixPlan'
import ChoixTerri from './form/ChoixTerri'
import ChoixBord from './form/ChoixBord'
import ColorChangingComponent from './components/animated/MyComponentTransition'


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<MainLayout />}>
                    <Route index element={<Dashboard2 />} />
                    <Route path="bord" element={<ChoixBord />} />
                    <Route path="territoire" element={<ChoixTerri />} />
                    <Route path="user" element={<UserRegistrationForm />} />
                    <Route path="plan" element={<ChoixPlan />} />
                    <Route path="gant" element={<ColorChangingComponent/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
