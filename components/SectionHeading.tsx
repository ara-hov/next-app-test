import React from "react";
import Link from "next/link";

const SectionHeading = ({ title, link }) => {
  return (
    <div className="section-heading container">
      <h2 className="section-header">{title}</h2>
      <span className="line"></span>
      <Link href={link}>
        <a className="section-button" href={link}>{link === "/rent-car" ? "All cars" : "All"}</a>
      </Link>
    </div>
  );
};

export default SectionHeading;
