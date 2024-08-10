export function Stats({ Items }) {
  if (!Items.length) {
    return (
      <p className="stats">
        <em>start adding some items to the packing list</em>
      </p>
    );
  }
  const numItems = Items.length;
  const numPacked = Items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go"
          : ` You have ${numItems} items on your list,and you already packed
        ${numPacked} (${percentage}%).`}
      </em>
    </footer>
  );
}
