// App.jsx
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import ProjectDetails from './components/pages/projects/ProjectDetails.jsx'
import projects from './components/Projects.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;