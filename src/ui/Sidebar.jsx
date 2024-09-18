import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiAcademicCap,
  HiArrowRight,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
} from "react-icons/hi2";
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
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex bg-slate-800">
      <button
        className={`font-bold text-slate-100 ${checked ? "bg-slate-900 hover:bg-slate-700" : "bg-slate-700 hover:bg-slate-900"}`}
        onClick={() => {
          setChecked((cur) => !cur);
        }}
      >
        {checked ? <HiChevronRight /> : <HiChevronLeft />}
      </button>
      <ul hidden={checked} className="py-12">
        {algos.map((category) => (
          <CategoryList key={category} category={category} />
        ))}
      </ul>
    </div>
  );
}
function CategoryList({ category }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <li className="mt-4">
        <div className="flex  items-center justify-start">
          <span className="pl-4 cursor-pointer" onClick={() => setCollapsed((cur) => !cur)}>
            {collapsed ? <HiChevronUp /> : <HiChevronDown />}
          </span>
          <span
            className={
              "block py-2 pl-4 pr-12 text-2xl text-slate-300 transition-all"
            }
            // to={"/sort"}
          >
            {category?.category}
          </span>
        </div>
        <ul hidden={collapsed}>
          {category?.children.map((algo) => (
            <li className="mt-2 px-12" key={algo}>
              <NavLink
                className="text-slate-400"
                key={algo}
                to={`/${category?.category}/${algo}`}
              >
                {algo}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}
export default Sidebar;
