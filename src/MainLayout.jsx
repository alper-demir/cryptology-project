import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
const MainLayout = () => {
    return (
        <div className="flex flex-col h-full items-center">
            <div className='w-full'>
                <Nav />
            </div>
            <div className='mt-20 w-full max-sm:w-[80%] h-screen'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout