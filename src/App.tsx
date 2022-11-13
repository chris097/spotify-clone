import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import routes from './routes';
import "./App.css"

function App() {

  const priveateRoutes = routes.privateRoutes.map(({ path, element: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  const publicRoutes = routes.publicRoutes.map(({ path, element: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <Toaster position="top-center" /> */}
      <Router>
        <Routes>
            {priveateRoutes}
            {publicRoutes}
        </Routes>
       </Router>
    </Suspense>
  );
}

export default App;
