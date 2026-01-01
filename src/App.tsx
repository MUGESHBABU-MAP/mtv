import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import TVGuide from './components/TVGuide';
import ChannelTable from './components/ChannelTable';
import channels from './channels.json';
import { useState } from 'react';

function App() {
  const [currentUrl, setCurrentUrl] = useState(channels[0].url);

  const handleChannelSelect = (url: string) => {
    setCurrentUrl(url);
  };

  const ChannelTableWrapper = () => {
    const navigate = useNavigate();

    const handlePlay = (url: string) => {
      setCurrentUrl(url);
      navigate('/');
    };

    return <ChannelTable channels={channels} onChannelSelect={handlePlay} />;
  }

  return (
    <Router basename="/mtv">
      <nav>
        <Link to="/">TV Guide</Link>
        <Link to="/list">Channel List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TVGuide currentUrl={currentUrl} channels={channels} onChannelSelect={handleChannelSelect} />} />
        <Route path="/list" element={<ChannelTableWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;