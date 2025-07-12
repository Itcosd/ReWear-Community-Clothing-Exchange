import React from "react";

const FilterSidebar = () => {
  return (
    <aside className="w-60 p-4 border-r">
      <h2 className="font-semibold text-lg mb-3">Filters</h2>

      <div className="mb-4">
        <h3 className="text-sm font-medium mb-1">Category</h3>
        <input type="text" placeholder="Search" className="w-full p-1 text-sm border rounded mb-2" />
        <div className="flex flex-col gap-1 text-sm">
          <label><input type="checkbox" /> Aprons</label>
          <label><input type="checkbox" /> Bedsheets</label>
          <label><input type="checkbox" /> Carpets</label>
          <p className="text-blue-500 cursor-pointer text-xs">Show More</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-1">Color</h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {["Beige", "Black", "Grey", "Multicolor", "Pink", "Purple"].map(color => (
            <button key={color} className="border rounded px-2 py-1">{color}</button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;