import Search from './components/search/main/Search.js';
import ErrorBoundary from './errorBoundary/ErrorBoundary.js';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Search />
      </div>
    </ErrorBoundary>
  );
}

export default App;
