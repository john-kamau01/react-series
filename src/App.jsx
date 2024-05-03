import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1>Hello Kamau</h1>
      <UserProfile username="wawesh" age={31} email="john@test.com" />
    </div>
  );
}

export default App;
