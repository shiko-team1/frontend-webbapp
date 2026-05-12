import { getCourses } from "@/features/courses/lib/api";
import { CourseList } from "@/features/courses/components/CourseList";

export default async function CoursesPage() {
  const courses = await getCourses();
  return <CourseList courses={courses} />;
}
