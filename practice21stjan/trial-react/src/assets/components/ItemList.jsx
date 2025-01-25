import ListItem from "./ListItem.jsx";
function ItemList({ list }) {
  return (
    <ul className="list-group">
      {list.map((item) => (
        <ListItem key={item} items={item}></ListItem>
      ))}
    </ul>
  );
}
export default ItemList;
