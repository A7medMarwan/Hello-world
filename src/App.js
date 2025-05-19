import './App.css';
import NameList from './Components/NameList';
import ParentComponent from './Components/ParentComponent';
// import Hello from './Components/Welcome';
// import Message from './Components/Message';
// import Counter from './Components/Counter';
// import ClassClick from './Components/ClassClick';

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <ParentComponent />
      <Hello name='Ahmed'>
        <p>my nickname is Maro</p>
      </Hello>
      <Message />
      <Counter />
      <ClassClick /> */}
    </div>
  );
}

export default App;
