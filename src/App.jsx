// App.jsx
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import ProjectDetails from './components/pages/projects/ProjectDetails.jsx'
import projects from './components/Projects.jsx';
import { LanguageProvider } from './components/LanguageContext.jsx';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;