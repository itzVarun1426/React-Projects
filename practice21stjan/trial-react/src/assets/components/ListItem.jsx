function ListItem({ items }) {
  return (
    <li key={items} className="list-group-item">
      {items}
    </li>
  );
}
export default ListItem;
