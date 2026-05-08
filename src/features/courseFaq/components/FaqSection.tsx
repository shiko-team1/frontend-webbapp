import fetchFaqList from "../lib/fetchFaqList";
import FaqItemCard from "./FaqItemCard";

type FaqSectionProps = {
  courseId: number;
};

export default async function FaqSection({ courseId }: FaqSectionProps) {
  const faqList = await fetchFaqList(courseId);

  if (faqList.length < 1) {
    return (
      <div>
        <p>
          Looks like there are no frequently asked questions for this course.
        </p>
      </div>
    );
  }

  return (
    <div className="test">
      {faqList.map((item, index) => {
        return (
          <FaqItemCard
            key={item.id}
            faqItem={item}
            startExpanded={index == 0}
          />
        );
      })}
    </div>
  );
}
