import { InstructorCourse } from "../types/InstructorCourse";
import { InstructorCourseCard } from "./InstructorCourseCard";

type Props = {
  courses: InstructorCourse[];
};

export function InstructorCoursesSection({ courses }: Props) {
  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--primary-color)]">
            Courses
          </p>
          <h2 className="text-2xl font-bold text-[var(--secondary-color)]">
            More courses by this instructor
          </h2>
        </div>
      </div>

      {courses.length === 0 ? (
        <div className="rounded-3xl bg-white p-8 text-center text-[var(--gray-color)] shadow-sm">
           No courses available for this instructor yet.
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {courses.map((course) => (
          <InstructorCourseCard key={course.id} course={course} />
      ))}
       </div>
      )}
    </section>
  );
}