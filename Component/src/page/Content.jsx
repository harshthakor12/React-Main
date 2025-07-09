import React from "react";
import "./Content.css";

function Content() {
  return (
    <main className="content">
      <h2>mountain</h2>
      <img
        className="content-image"
        src="https://tse2.mm.bing.net/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?pid=Api&P=0&h=180"
        alt="Placeholder"
      />
      <p>
        Mountains are some of the most awe-inspiring natural features on Earth.
        They provide breathtaking views, diverse ecosystems, and cultural
        significance to the regions they inhabit.
      </p>
      <ol className="content-list">
        <li>
          <strong>Mount Everest</strong> – Highest mountain (8,848m),
          Nepal/China
        </li>
        <li>
          <strong>K2</strong> – Second-highest peak, Pakistan/China
        </li>
        <li>
          <strong>Mount Kilimanjaro</strong> – Tallest in Africa, Tanzania
        </li>
        <li>
          <strong>Denali</strong> – Highest in North America, USA
        </li>
        <li>
          <strong>Mount Fuji</strong> – Iconic volcanic peak, Japan
        </li>
      </ol>
    </main>
  );
}

export default Content;
