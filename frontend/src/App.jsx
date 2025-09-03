
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import toast from 'react-hot-toast';


const App = () => {
  return (
    <div date-theme="luxury">
      <button className="btn btn-soft">Default</button>
      <button className="btn btn-soft btn-primary">Primary</button>
      <button className="btn btn-soft btn-secondary">Secondary</button>
      <button className="btn btn-soft btn-accent">Accent</button>
      <button className="btn btn-soft btn-info">Info</button>
      <button className="btn btn-soft btn-success">Success</button>
      <button className="btn btn-soft btn-warning">Warning</button>
      <button className="btn btn-soft btn-error">Error</button>
      <button className='btn btn-primary'>Home</button>
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