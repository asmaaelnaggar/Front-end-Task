import { Star } from "lucide-react";

// Helper to render stars
function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "text-[#BE968E] fill-[#BE968E]"
              : "text-[#BE968E] fill-[#BE968E] opacity-40"
          }
        />
      ))}
    </div>
  );
}

// Example comment data
const comments = [
  {
    name: "Alice",
    rating: 5,
    time: "2 days ago",
    text: "Amazing product! Really loved it.",
  },
  {
    name: "Bob",
    rating: 4,
    time: "4 days ago",
    text: "Good quality, but shipping was slow.",
  },
  {
    name: "Charlie",
    rating: 3,
    time: "1 week ago",
    text: "Average, expected better packaging.",
  },
  {
    name: "Diana",
    rating: 5,
    time: "10 days ago",
    text: "Excellent! Highly recommend it to everyone.",
  },
];

export default function CommentSection() {
  return (
    <div
      className="
        bg-white rounded-xl shadow-md
        flex flex-col gap-6
        px-4 sm:px-6 md:px-10 lg:px-[120px]
        py-6
      "
    >
      {/* Comment list */}
      {comments.map((comment, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 border-b pb-4 last:border-b-0"
        >
          {/* Row 1 */}
          <div
            className="
              flex flex-col
              sm:flex-row
              sm:justify-between
              sm:items-center
              gap-2
            "
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[#000] text-[18px] sm:text-[20px] font-[600]">
                {comment.name}
              </span>
              <Stars rating={comment.rating} />
            </div>

            <span className="text-[#545454] text-[13px] sm:text-[14px] font-[500]">
              {comment.time}
            </span>
          </div>

          {/* Row 2 */}
          <p className="text-[#000] text-[15px] sm:text-[16px] font-[400] leading-relaxed">
            {comment.text}
          </p>
        </div>
      ))}

      {/* View more comments button */}
      <div className="flex justify-center pt-2">
        <button
          className="
            px-6 py-3
            rounded-lg
            bg-[#BE968E]
            text-white
            font-medium
            hover:opacity-80
            transition-opacity
            w-full
            sm:w-auto
          "
        >
          View More Comments
        </button>
      </div>
    </div>
  );
}
