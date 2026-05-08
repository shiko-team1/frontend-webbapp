"use client";
import { useState } from "react";
import { FaqItem } from "../types/FaqItem";
import styles from "./faqItemCard.module.css";

type FaqItemCardProps = {
  faqItem: FaqItem;
  index: number;
};

function FaqItemCard({ faqItem, index }: FaqItemCardProps) {
  const [isExpanded, setIsExpanded] = useState(index == 0);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={styles.itemCard}>
      <div className={styles.upperHalf} onClick={toggleExpanded}>
        <h3>
          {index + 1}. {faqItem.title}
        </h3>
        <button onClick={toggleExpanded}>{isExpanded ? "-" : "+"}</button>
      </div>
      {isExpanded ? <p className={styles.content}>{faqItem.content}</p> : null}
    </div>
  );
}

export default FaqItemCard;
