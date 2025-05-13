import './App.css';
import UserTable from '../src/components/UserTable';

function App() {
  return (
    <div className="App">
     <header>
        <h1>User Management Table</h1>
      </header>
      <main>
        <UserTable />
      </main>
    </div>
  );
}

export default App;
