import List from "./List.jsx";
import Heading from "./Heading.jsx";

function App() {
  const ListItem = ["apple", "banana", "orange"];
  return (
    <>
      <Heading></Heading>
      <List items={ListItem}></List>
    </>
  );
}

export default App;
