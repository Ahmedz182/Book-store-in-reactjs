import React from "react";

const FilterBar = () => {
  return (
    <div>
      <div className="bg-gray flex mx-3 items-center px-5 py-3 rounded justify-between">
        <div className="flex ">
          <i class="ri-equalizer-2-line text-title-text text-2xl me-2"></i>
          <p className="text-xl font-bold">Filter</p>
        </div>
        <div className="flex gap-x-3">
          <div className="flex items-center gap-2">
            <select id="language" className="text-sm rounded p-2 shadow px-2">
              <option selected>Select Language</option>
              <option value="en">English</option>
              <option value="bg">Bangla</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <select id="payment" className="text-sm rounded p-2 shadow px-2">
              <option selected>Type</option>
              <option value="paid">Paid</option>
              <option value="free">Free</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
