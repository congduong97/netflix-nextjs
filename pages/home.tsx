import Link from "next/link";
import React from "react";

export default function home() {
  return (
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
  );
}
