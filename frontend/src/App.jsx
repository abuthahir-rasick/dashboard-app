import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./context/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const Users = lazy(() => import("./pages/Users"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link> | <Link to="/settings">Settings</Link>
        </nav>
        <Suspense fallback={<p>Loading page...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;