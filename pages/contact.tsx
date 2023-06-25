import { event } from "nextjs-google-analytics";
import React from "react";

export default function contact() {
  return (
    <div>
      <p>contact</p>
      <button
        onClick={() => {
          // event("contact-press", {
          //   category: "home dey",
          //   label: "Xin chao toi la cong" + new Date().toDateString(),
          // });
          window.parent.postMessage({ event: 'home-press',category: 'hi2',label:'"Xin chao toi la cong" + new Date().toDateString(),'}, '*')
        }}
      >
        Press Home
      </button>
    </div>
  );
}
