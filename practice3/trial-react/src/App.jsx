import ItemList from "./assets/components/ItemList.jsx";
import ItemText from "./assets/components/itemtext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let list = ["apple", "banana", "cherry", "dates"];
  //the below code is exmaple for the conditional rendering and conditining statements in react
  //1 . if else statement
  // let list = [];
  // if(list.length === 0){
  //   return <h1>hello this is example if the list is empty</h1>
  // }

  //2. ternary operator
  // let list = [];
  // return (
  //   <>
  //     {list.length === 0 ? (
  //       <h1>hello this is example if the list is empty</h1>
  //     ) : (
  //       <ul className="list-group">
  //         {list.map(item => (
  //           <li key={item} className="list-group-item">
  //             {item}
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </>
  // );

  return (
    <>
      {/* //alternate way to use loop in react  */}
      <h1>This is example text</h1>
      {/*logical operator*/}
      <ItemText list={list}></ItemText>
      <ItemList list={list}></ItemList>
    </>
  );
}

export default App;
