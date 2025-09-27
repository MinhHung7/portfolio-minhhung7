import React, { useState } from "react";
import {
  BookOpen,
  Search,
  X,
  CircleX,
  CirclePlus,
  ChevronDown,
} from "lucide-react";

const Blogs = () => {
  const listTimesFilter = ["Newest", "Oldest"];
  const [timeFilter, setTimeFilter] = useState("Newest"); // ["Newest", "Oldest"
  const [selectedTimeFilter, setSelectTimeFilter] = useState(false);
  const [showTimeFilter, setShowTimeFilter] = useState(false);

  const listCategoriesFilter = [
    "All",
    "AI Engineer",
    "Big Data",
    "Frontend Development",
  ];
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedCategoryFilter, setSelectCategoryFilter] = useState(false);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Subheader */}
      <div className="flex flex-col items-center text-center gap-3 mb-10">
        <div className="flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-[#3cc88a]" />
          <h2 className="text-3xl font-bold text-white">My Blogs</h2>
        </div>
        <p className="text-[#898989] text-sm md:text-base">
          Here I share my thoughts, tutorials, and experiences in AI, web
          development, and new technologies I’ve explored. Hopefully these posts
          will be helpful and inspiring to you!
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {/* Search */}
        <div className="flex items-center border border-[#898989] rounded-lg gap-3">
          <Search className="w-5 h-5 ml-2 text-[#898989]" />
          <input
            type="text"
            placeholder="Search blogs..."
            className="flex-1 outline-none py-2 text-[#898989]"
          />
        </div>
        {/* Filters list */}
        <div className="flex flex-wrap items-center justify-between w-full gap-2">
          <div className="flex items-center gap-3">
            {/* Time Filters */}
            {selectedTimeFilter ? (
              <div className="relative">
                <div className="flex items-center border-2 border-gray-400 rounded-full px-2 py-1">
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setSelectTimeFilter(false)}
                  >
                    <CircleX className="text-gray-500 w-4 h-4 mr-1" />
                    <p className="text-gray-500 text-sm">Time</p>
                  </div>

                  <div className="w-px h-4 bg-gray-400 mx-2" />
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setShowTimeFilter((prev) => !prev)}
                  >
                    <p className="text-sm text-[#3cc88a] mr-1">{timeFilter}</p>
                    <ChevronDown className="text-gray-500 h-3 w-3" />
                  </div>
                </div>

                {/* Dropdown menu */}
                {showTimeFilter && (
                  <div className="absolute left-0 mt-2 bg-[#006239] rounded-lg shadow-lg w-30 z-50">
                    {/* Arrow */}
                    <div className="absolute -top-1 left-4 w-3 h-3 bg-[#006239] rotate-45"></div>

                    <ul className="py-2">
                      {listTimesFilter.map((time, index) => (
                        <li
                          className="px-4 py-2 hover:bg-[#287050] hover:font-bold cursor-pointer text-sm text-left"
                          onClick={() => {
                            setTimeFilter(time);
                            setShowTimeFilter(false);
                          }}
                        >
                          {time}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div
                className="flex items-center border-2 border-gray-400 border-dashed rounded-xl px-2 py-1 text-gray-500 gap-2 cursor-pointer hover:bg-[#3cc88a] hover:border-none hover:text-white"
                onClick={() => setSelectTimeFilter(true)}
              >
                <CirclePlus className="w-4 h-4" />
                <p className="text-sm">Time</p>
              </div>
            )}
            {/* Category Filters */}
            {selectedCategoryFilter ? (
              <div className="relative">
                <div className="flex items-center border-2 border-gray-400 rounded-full px-2 py-1">
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setSelectCategoryFilter(false)}
                  >
                    <CircleX className="text-gray-500 w-4 h-4 mr-1" />
                    <p className="text-gray-500 text-sm">Category</p>
                  </div>

                  <div className="w-px h-4 bg-gray-400 mx-2" />
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setShowCategoryFilter((prev) => !prev)}
                  >
                    <p className="text-sm text-[#3cc88a] mr-1">
                      {categoryFilter}
                    </p>
                    <ChevronDown className="text-gray-500 h-3 w-3" />
                  </div>
                </div>

                {/* Dropdown menu */}
                {showCategoryFilter && (
                  <div className="absolute left-0 mt-2 bg-[#006239] rounded-lg shadow-lg w-30 z-50">
                    {/* Arrow */}
                    <div className="absolute -top-1 left-4 w-3 h-3 bg-[#006239] rotate-45"></div>

                    <ul className="py-2">
                      {listCategoriesFilter.map((category, index) => (
                        <li
                          className="px-4 py-2 hover:bg-[#287050] hover:font-bold cursor-pointer text-sm text-left"
                          onClick={() => {
                            setCategoryFilter(category);
                            setShowCategoryFilter(false);
                          }}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div
                className="flex items-center border-2 border-gray-400 border-dashed rounded-xl px-2 py-1 text-gray-500 gap-2 cursor-pointer hover:bg-[#3cc88a] hover:border-none hover:text-white"
                onClick={() => setSelectCategoryFilter(true)}
              >
                <CirclePlus className="w-4 h-4" />
                <p className="text-sm">Category</p>
              </div>
            )}
          </div>
          {/* Clear filter */}
          <div
            className="flex items-center gap-1 cursor-pointer px-2 hover:bg-[#3cc88a] py-2 rounded-xl transition-all duration-200 ease-in-out"
            onClick={() => {
              setSelectTimeFilter(false);
              setTimeFilter("Newest");
              setSelectCategoryFilter(false);
              setCategoryFilter("All");
            }}
          >
            <X className="text-white w-4 h-4" />
            <p className="text-white text-sm">Clear Filters</p>
          </div>
        </div>
      </div>

      {/* Blog list */}
      <div>{/* Map blog items ở đây */}</div>
    </div>
  );
};

export default Blogs;
