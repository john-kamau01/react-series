import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1>Hello Kamau</h1>
      <UserProfile
        username="wawesh"
        age={31}
        email="john@test.com"
        myFunc={() => console.log("Hello World")}
        myArray={[
          { id: 1, name: "John" },
          { id: 2, name: "David" },
        ]}
      />
    </div>
  );
}

export default App;
