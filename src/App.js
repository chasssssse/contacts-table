import React from 'react';
import './App.css';

function App() {
  const [name, setName] = React.useState('');
  const getRes = async () => (await fetch('/api/test')).json()

  React.useEffect(() => {
    getRes().then(res => setName(res.data[0].Name));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
