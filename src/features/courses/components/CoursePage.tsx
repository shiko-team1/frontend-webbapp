import { Course } from "../types/course";

export function CoursePage({ course }: { course: Course }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-4">{course.description}</p>
      <p className="mt-2 text-gray-600">Category: {course.category}</p>
    </div>
  );
}
