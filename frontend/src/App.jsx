import { Routes, Route } from 'react-router-dom'; // It's best practice to import from 'react-router-dom'

// Import your page components
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx'; // Corrected the typo "Deateil"

const App = () => {
  return (
    // If you add a Navbar or Header, it should go here, outside of <Routes>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
      
      {/* This is a "catch-all" route for any path that doesn't match */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;