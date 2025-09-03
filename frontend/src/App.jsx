
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import toast from 'react-hot-toast';


const App = () => {
  return (
    <div date-theme="luxury">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route   path="/note/:id" element={<NoteDetailPage />} />
        
        {/* This "catch-all" route now works because NotFoundPage is imported */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;