import { NavLink } from "react-router-dom";

const algos = [
  {
    category: "sort",
    children: ["bubble-sort", "selection-sort", "insertion-sort", "merge-sort"],
  },
  {
    category: "search",
    children: ["iterative-search", "binary-search"],
  },
];

function Sidebar() {
  return (
    <ul>
      {algos.map((cat) => (
        <li key={cat.category}>
          <NavLink to={"/sort"}>{cat.category}</NavLink>
          <ul>
            {cat.children.map((algo) => (
              <li key={algo}>
                <NavLink key={algo} to={`/${cat.category}/${algo}`}>
                  ----------{algo}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
export default Sidebar;
