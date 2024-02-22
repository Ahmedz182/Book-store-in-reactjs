import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs";
import Quotes from "./pages/Quotes";
import BookDetails from "./pages/BookDetails";
import Lectures from "./pages/Lectures";
import Contact from "./pages/Conatct";

function App() {
  const [sticky, setSticky] = useState(false);
  const [Showmenu, setShowmenu] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowmenu(false)
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Router>
        <NavBar sticky={sticky} Showmenu={Showmenu} setShowmenu={setShowmenu} title="enamul haque" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Books />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:item" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

      </Router>
    </>
  );
}

export default App;
