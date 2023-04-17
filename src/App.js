import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

// npm run both

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is the best React Course"/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
