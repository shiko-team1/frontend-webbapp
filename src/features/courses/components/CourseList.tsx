import { Course } from "../types/course";
import { CourseCard } from "./CourseCard";

export function CourseList({ courses }: { courses: Course[] }) {
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
        All Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
