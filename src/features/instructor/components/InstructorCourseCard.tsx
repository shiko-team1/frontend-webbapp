import Link from "next/link";
import { Clock, Star, BookOpen } from "lucide-react";
import { InstructorCourse } from "../types/InstructorCourse";

type Props = {
  course: InstructorCourse;
};

export function InstructorCourseCard({ course }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="h-20 bg-[#ffece7]" />

      <div className="p-2.5">
        <h3 className="min-h-[48px] text-base font-bold leading-6 text-[var(--secondary-color)]">
         {course.title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--gray-color)]">
          <span className="inline-flex items-center gap-1">
            <BookOpen size={15} />
            {course.lessons} lessons
          </span>

          <span className="inline-flex items-center gap-1">
            <Clock size={15} />
            {course.duration}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary-color)]">
            <Star size={16} fill="currentColor" />
            {course.rating}
          </span>

          <Link
             href={`/courses/${course.courseId}`}
             className="text-sm font-semibold text-[var(--primary-color)]"
          >
               View Course →
          </Link>
        </div>
      </div>
    </article>
  );
}