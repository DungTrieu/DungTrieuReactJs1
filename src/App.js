import './App.css';
import Name from './nameInput.component';
import Header from './header.component';
// import DisplayName from './displayName.component';

function App() {
  return (
    <div className="App" >
      <Header />
      <Name   />
      {/* <DisplayName /> */}
    </div>
  );
}

export default App;
