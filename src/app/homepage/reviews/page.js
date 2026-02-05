"use client";
import CommentSection from "./commentsection.jsx";
import RatingSummary from "./ratingsummary.jsx";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <RatingSummary />
      <CommentSection />
    </div>
  );
}
