"use client";
import Footer from "@/components/footer/index.jsx";
import Navbar from "./homepage/navbar/navbar.jsx";
import CommentSection from "./homepage/reviews/commentsection.jsx";
import RatingSummary from "./homepage/reviews/ratingsummary.jsx";
import SimilarItems from "@/components/similaritems.jsx";
import ProductDetails from "./productdetails/page.js";

export default function HomePage() {
  return (
    <div className="rounded-[40px] flex flex-col w-full gap-10">
      <Navbar />
       <ProductDetails/>
      <RatingSummary />
      <CommentSection/>
       <SimilarItems/>
       <Footer/>
    </div>
  );
}
