import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import bookdata from "../assets/json/book";
import BookItem from "../components/BookItem";
import category from "../assets/json/category";
import { Link } from "react-router-dom";

const Books = () => {
  const { language } = category[0];
  const [Category, setCategory] = useState("");
  const [Search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setCategory("");
    setSearch("");
    window.scrollTo(0, 0);
    filterBooks();
  }, []);

  useEffect(() => {
    filterBooks();
  }, [Category, Search]);

  const filterBooks = () => {
    const filtered = bookdata.filter((book) => {
      const matchesCategory =
        Category === "" || book.language.includes(Category);

      const matchesSearch =
        Search === "" ||
        book.title.toLowerCase().includes(Search.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    setFilteredBooks(filtered);
  };

  return (
    <>
      <div className="mt-16 flex flex-col">
        <div className="flex justify-between items-center pe-10 sm:flex-col sm:pe-0">
          <Title title="Explore Books" />
          <div className="flex justify-center gap-1 items-center rounded bg-gray border border-[#0000]/25 sm:mb-2">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              className="w-72 sm:w-[86dvw] p-2 "
              placeholder="Search Here"
            />
            {/* <i
              className="ri-search-line text-title-text text-2xl p-2 cursor-pointer "
              onClick={() => {
                console.log(Search + " from button");
              }}></i> */}
          </div>
        </div>

        <div>
          <div className="bg-gray flex mx-3 items-center px-5 py-3 rounded justify-between">
            <div className="flex ">
              <i className="ri-equalizer-2-line text-title-text text-2xl me-2"></i>
              <p className="text-xl font-bold">Filter</p>
            </div>
            <div className="flex gap-x-3">
              <div className="flex items-center gap-2">
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  id="language"
                  className="text-sm rounded p-2 shadow px-2">
                  <option selected value="">
                    Select Language
                  </option>
                  {language.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col flex-wrap items-center justify-center pb-8 animate-fade-down animate-ease-in-out animate-normal animate-fill-both">
          <div className="w-full gap-3 gap-y-6 p-10 flex flex-wrap justify-around">
            {filteredBooks.map(({ title, img, tags, language, _id }) => (
              <BookItem
                key={_id.$oid}
                title={title}
                img={img}
                tags={tags}
                id={_id.$oid}
                category={language}
              />
            ))}
          </div>
          <Link to="/books">
            <button className="border w-max px-8 p-2 font-bold rounded hover:bg-title-text hover:text-white transform ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Books;
