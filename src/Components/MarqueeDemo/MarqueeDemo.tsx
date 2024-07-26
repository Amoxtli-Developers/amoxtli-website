import { cn } from "../../utils/cn";
import Marquee from "../Marquee/Marquee";
import googleReview from "../../assets/google.png";
import "./MarqueeDemo.css";

const reviews = [
  {
    name: "Alice",
    username: "@alice",
    body: "The team at AWD exceeded our expectations. Their expertise in web development is unparalleled.",
    img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(255,182,193);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(255,105,180);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='50' fill='url(%23grad1)' /%3E%3Ctext x='50%25' y='55%25' font-size='0' fill='white' text-anchor='middle' alignment-baseline='middle' dy='.3em'%3EAlice%3C/text%3E%3C/svg%3E",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Our branding has never looked better. The creative solutions provided were exactly what we needed.",
    img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(255,105,180);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(255,182,193);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='50' fill='url(%23grad2)' /%3E%3Ctext x='50%25' y='55%25' font-size='0' fill='white' text-anchor='middle' alignment-baseline='middle' dy='.3em'%3EBob%3C/text%3E%3C/svg%3E",
  },
  {
    name: "Catherine",
    username: "@catherine",
    body: "AWD delivered a seamless user experience for our app. Their attention to detail is impressive.",
    img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(255,192,203);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(255,105,180);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='50' fill='url(%23grad3)' /%3E%3Ctext x='50%25' y='55%25' font-size='0' fill='white' text-anchor='middle' alignment-baseline='middle' dy='.3em'%3ECatherine%3C/text%3E%3C/svg%3E",
  },
  {
    name: "David",
    username: "@david",
    body: "The SEO improvements have significantly boosted our online visibility. Highly recommend AWD!",
    img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(255,182,193);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(255,192,203);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='50' fill='url(%23grad4)' /%3E%3Ctext x='50%25' y='55%25' font-size='0' fill='white' text-anchor='middle' alignment-baseline='middle' dy='.3em'%3EDavid%3C/text%3E%3C/svg%3E",
  },
  {
    name: "Eva",
    username: "@eva",
    body: "Their dedication and commitment to our project were outstanding. We're thrilled with the results.",
    img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(255,105,180);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(255,182,193);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='50' fill='url(%23grad5)' /%3E%3Ctext x='50%25' y='55%25' font-size='0' fill='white' text-anchor='middle' alignment-baseline='middle' dy='.3em'%3EEva%3C/text%3E%3C/svg%3E",
  },
  {
    name: "Frank",
    username: "@frank",
    body: "AWD transformed our website into a powerful marketing tool. The feedback from our customers has been great.",
    img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(255,182,193);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(255,105,180);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='50' fill='url(%23grad6)' /%3E%3Ctext x='50%25' y='55%25' font-size='0' fill='white' text-anchor='middle' alignment-baseline='middle' dy='.3em'%3EFrank%3C/text%3E%3C/svg%3E",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl  p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-black dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-justify">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="section relative flex  flex-col items-center justify-center overflow-hidden rounded-lg">
      <h3 className="section-title">What our clients say</h3>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      <div className="google-review">
        <img src={googleReview} alt="google-reviews" />
      </div>
    </div>
  );
}
