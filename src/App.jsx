// App.jsx
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx'; // Assuming default export
import Home from './components/pages/Home.jsx';
import ProjectDetails from './components/ProjectDetails.jsx'
import projects from './components/Projects.jsx'; // Import the projects data

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;