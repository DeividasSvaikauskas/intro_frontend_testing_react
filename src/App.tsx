import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HelloReact from './lecture 1/HelloReact';
import NewMessageForm from './lecture 2/NewMessageForm';
import QuoteContainer from './lecture 3/QuoteContainer';
import Homepage from './Homepage';
import ProduceList from './exercise 1/ProduceList';
import NewProduceForm from './exercise 2/NewProduceForm';
import { produce } from './exercise 1/produce';
import QuoteGenerator from './exercise 3/QuoteGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/lecture1" element={<HelloReact />} />
        <Route
          path="/lecture2"
          element={<NewMessageForm onSend={undefined} />}
        />
        <Route path="/lecture3" element={<QuoteContainer />} />
        <Route path="/exercise1" element={<ProduceList produce={produce} />} />
        <Route
          path="/exercise2"
          element={<NewProduceForm onCreate={undefined} />}
        />
        <Route path="/exercise3" element={<QuoteGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
