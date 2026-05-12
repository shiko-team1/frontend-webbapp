import { getCourseById } from "@/features/courses/lib/api";
import { CoursePage } from "@/features/courses/components/CoursePage";

export default async function CourseDetailsPage({ params }: { params: { id: string } }) {
  const course = await getCourseById(params.id);
  return <CoursePage course={course} />;
}
