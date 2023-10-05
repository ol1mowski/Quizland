
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Game from './Components/Game/Game';
import Start from './Components/Start/Start';
import Summary from './Components/Summary/Summary';

const router = createBrowserRouter([
  { path: '/Quizland', element: <Home />, errorElement: <ErrorPage />, children: []},
  { path: '/Quizland/game', element: <Game />},
  { path: '/Quizland/start', element: <Start />},
  { path: '/Quizland/summary', element: <Summary />},
])


function App() {


  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
