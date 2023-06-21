import Link from "next/link";
import React from "react";
import { GoogleAnalytics, event } from "nextjs-google-analytics";
export default function home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Blog Post</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          event("event", {
            category: "Contact",
            label: "Xin chao toi la cong" + new Date().toDateString(),
          });
        }}
      >
        Press Home
      </button>
    </div>
  );
}
