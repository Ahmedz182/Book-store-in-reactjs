import React, { useEffect, useState } from "react";
import bookdata from "../assets/json/book";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import BookSection from "./BookSection";
import Title from "../components/Title";
import CommentSection from "../components/CommentSection";
import reviewData from "../assets/json/review";
const BookDetails = ({ id }) => {
  const location = useLocation();
  const linkaddress = window.location.href; // Store the current URL in linkaddress
  const currentRoute = location.pathname;
  const bookid = currentRoute.split("/")[2];
  const idbook = bookid;
  const [bookDetail, setBookDetail] = useState(null);
  const [dataExists, setDataExists] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const foundBook = bookdata.find((entry) => entry._id.$oid === bookid);
    setBookDetail(foundBook);

    if (foundBook) {
      setDataExists(true);
    } else {
      setDataExists(false);
    }
  }, [location.pathname, id, bookid]);

  const currentbook = reviewData.filter((review) => review.bookid === idbook);
  const length = currentbook.length;
  const totalRating = currentbook
    .filter((item) => item.rating)
    .reduce((acc, cur) => acc + cur.rating, 0);
  const avgRating =
    length > 0 ? Math.round((totalRating / length) * 10) / 10 : 0;

  return (
    <>
      <div className="mt-7 justify-between animate-fade-left animate-ease-in-out animate-normal animate-fill-both">
        {dataExists ? (
          <>
            <div className=" flex p-5  sm:flex-col  ">
              <img
                className="imgbookdetail"
                src={bookDetail.img}
                alt={`Cover of the book "${bookDetail.title}"`}
              />

              <div className="flex  flex-col py-12 gap-2 w-full  ">
                <p className="text-2xl font-bold">{bookDetail.title}</p>
                <p className="text-l font-bold">
                  Written in :&nbsp;
                  <strong className="text-title-text/85">
                    {bookDetail.language}
                  </strong>
                </p>

                {avgRating ? (
                  <>
                    <p className="text-l  font-bold">
                      Rating :&nbsp;
                      <strong className="text-title-text/85">
                        {avgRating} / 5
                      </strong>
                    </p>
                  </>
                ) : (
                  "No Reviews"
                )}
                <p className="text w-3/4 shortdesc text-title-text/70 font-semibold">
                  {bookDetail.short_desc}
                </p>
                <div className="flex gap-2 justify-bottom mt-4 items-center">
                  <p className="text-sm font-semibold">Share Book Via -</p>
                  <div className="flex gap-1">
                    <FacebookShareButton url={linkaddress}>
                      <i class="social ri-facebook-circle-fill cursor-pointer text-[#1877f2ff] text-2xl"></i>
                    </FacebookShareButton>

                    <WhatsappShareButton url={linkaddress}>
                      <i class="social ri-whatsapp-line cursor-pointer text-[#24d467ff] text-2xl"></i>
                    </WhatsappShareButton>
                    <LinkedinShareButton url={linkaddress}>
                      <i class="social ri-linkedin-box-fill cursor-pointer text-[#0076b5ff] text-2xl"></i>
                    </LinkedinShareButton>
                    <TelegramShareButton url={linkaddress}>
                      <i class="social ri-telegram-fill cursor-pointer text-[#355370ff] text-2xl"></i>
                    </TelegramShareButton>
                    <TwitterShareButton url={linkaddress}>
                      <i class="social ri-twitter-x-line cursor-pointer text-[#000000ff] text-2xl"></i>
                    </TwitterShareButton>
                    <EmailShareButton url={linkaddress}>
                      <i class="social ri-mail-line cursor-pointer text-[#808080ff] text-2xl"></i>
                    </EmailShareButton>
                  </div>
                </div>
                <div className="flex gap-2 justify-bottom mt-4">
                  <a
                    href={bookDetail.buyPrint}
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="border bg-title-text/90 hover:bg-title-text cursor-pointer p-2 rounded text-white text-sm">
                      Buy Hard Copy
                    </button>
                  </a>
                  <a
                    href={bookDetail.buySoft}
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="border bg-title-text/90 hover:bg-title-text cursor-pointer p-2 rounded text-white text-sm">
                      Buy Ebook
                    </button>
                  </a>
                  <a
                    href={bookDetail.readbook}
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="border bg-title-text/90 hover:bg-title-text cursor-pointer p-2 rounded text-white text-sm">
                      Read Ebook
                    </button>
                  </a>
                </div>
              </div>
              <div className="detailBg px-[1.25rem]"></div>
            </div>
            <div className="p-3 flex-col px-10 gap-3 sm:px-4 ">
              <p className="text-2xl font-bold">Description</p>
              <p className="py-3">{bookDetail.desc}</p>
            </div>
            <div className="p-3 flex-col px-10 gap-3 sm:px-4 ">
              <p className="text-2xl font-bold">Recent reviews</p>
              <CommentSection id={bookid} />
            </div>

            <Title title="Recent Books" />
            <BookSection />
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default BookDetails;
