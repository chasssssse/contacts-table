import React from 'react';
import './App.css';

function App() {
  const [res, setRes] = React.useState({ data: null });
  const getRes = async () => (await fetch('/api/test')).json()

  React.useEffect(() => {
    getRes().then(res => setRes(res));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{res.data}</p>
      </header>
    </div>
  );
}

export default App;
