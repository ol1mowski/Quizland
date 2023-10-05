
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Game from './Components/Game/Game';
import Start from './Components/Start/Start';
import Summary from './Components/Summary/Summary';

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage />, children: []},
  { path: '/game', element: <Game />},
  { path: '/start', element: <Start />},
  { path: '/summary', element: <Summary />},
])


function App() {


  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
