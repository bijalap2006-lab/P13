import React from "react";
import {
  HashRouter,
  MemoryRouter,
  StaticRouter,
  Routes,
  Route,
  Link
} from "react-router";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

// HashRouter Example
function HashExample() {
  return (
    <HashRouter>
      <h2>HashRouter</h2>
      <Link to="/">Home</Link>{" | "}
      <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

// MemoryRouter Example
function MemoryExample() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <h2>MemoryRouter</h2>
      <Link to="/">Home</Link>{" | "}
      <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
}

// StaticRouter Example
function StaticExample() {
  return (
    <StaticRouter location="/about">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </StaticRouter>
  );
}

function App() {
  return (
    <div>
      <HashExample />
      <hr />

      <MemoryExample />
      <hr />

      <h2>StaticRouter</h2>
      <StaticExample />
    </div>
  );
}

export default App;