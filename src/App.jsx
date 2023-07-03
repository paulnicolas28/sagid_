import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import Dashboard2 from './pages/Dashboard2'
import MainLayout from './layout/MainLayout'
import UserRegistrationForm from './form/UserRegistrationForm'
import ChoixPlan from './form/ChoixPlan'
import ChoixTerri from './form/ChoixTerri'
import YearlyGanttChart from './pages/GanttChart'
import GanttChart from './pages/GanttChart'
import AnimatedText from './components/animated/AnimatedText'
import FranceMap from './pages/FranceMap'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<MainLayout />}>
                    <Route index element={<Dashboard2 />} />
                    <Route path="territoire" element={<ChoixTerri />} />
                    <Route path="user" element={<UserRegistrationForm />} />
                    <Route path="plan" element={<ChoixPlan />} />
                    <Route path="gant" element={<AnimatedText oldText="z Text" newText="New Text" />} />
                    <Route path="france" element={<FranceMap />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
