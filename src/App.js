import './App.css';
import CreateUser from './CreateUser';
import CreateConv from './CreateConv';
import CreateMember from './CreateMember';

function App() {
  return (
    <div className="App">
      <section className='section-1'>
        <CreateUser></CreateUser>
        <CreateConv></CreateConv>
        <CreateMember></CreateMember>
      </section>
    </div>
  );
}

export default App;