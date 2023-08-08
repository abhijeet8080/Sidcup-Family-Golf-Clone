import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import CursorBlur from './components/CursorBlur';
import Video from './components/Video';
import Main from './components/Main';
import './App.css';

function App() {
  return (<>
    <Navbar />
    <Cursor />
    <CursorBlur />
    <Video />
    <Main />
    </>
  );
}

export default App;
