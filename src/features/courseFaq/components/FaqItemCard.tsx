"use client";
import { useState } from "react";
import { FaqItem } from "../types/FaqItem";

type FaqItemCardProps = {
  faqItem: FaqItem;
  startExpanded: boolean;
};

function FaqItemCard({ faqItem, startExpanded }: FaqItemCardProps) {
  const [isExpanded, setIsExpanded] = useState(startExpanded);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div>
      <div>
        <h3>{faqItem.title}</h3>
        <button onClick={toggleExpanded}>{isExpanded ? "-" : "+"}</button>
      </div>
      {isExpanded ? <p>{faqItem.content}</p> : null}
    </div>
  );
}

export default FaqItemCard;
