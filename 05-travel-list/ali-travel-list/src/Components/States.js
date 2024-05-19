import { React } from "react";

export function States({ items }) {
  if (!items.length)
    return <p className="stats">please start adding some items</p>;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! ready to go to ✈"
          : `you have ${numItems} items on your list, and you already paked
        ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
