import Link from "next/link";
import { Course } from "../types/course";

import { InstructorPlaceholder } from "./InstructorPlaceholder";
import { RatingPlaceholder } from "./RatingPlaceholder";
import { LessonCountPlaceholder } from "./LessonCountPlaceholder";


export function CourseCard({ course }: { course: Course }) {
  const imageMap: Record<string, string> = {
    "Artificial Intelligence": "../images/courses/Artificial.png",
    "Data Science & Analytics": "../images/courses/DataScience.png",
    "Digital Marketing": "../images/courses/DigitalMarket.png",
    "UI/UX Design for Beginner": "../images/courses/UiUx.png",
    "Full Stack Developer": "../images/courses/Fullstack.png",
    "Sketch for Designer": "../images/courses/SketchDesign.png",
  };

  const thumbnail = imageMap[course.title] || "/images/courses/default.png";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-40 w-full">
        <img
          src={thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-zinc-900">
          {course.title}
        </h3>

        <p className="text-sm text-zinc-600 mt-1 line-clamp-2">
          {course.description}
        </p>

        <div className="flex flex-col gap-1 mt-3">
            <InstructorPlaceholder />
            <RatingPlaceholder />
            <LessonCountPlaceholder />
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-zinc-500">{course.category}</span>

          <Link
            href={`/course/${course.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-xl transition-all"
            style={{ backgroundColor: "#ED5735" }}
            >
            View Details
            <span className="text-lg leading-none">→</span>
          </Link>

        </div>
      </div>
    </div>
  );
}
