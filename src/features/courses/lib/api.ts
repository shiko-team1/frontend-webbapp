import { Course } from "../types/course";

export async function getCourses(): Promise<Course[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getCourseById(id: string): Promise<Course> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/${id}`, {
    cache: "no-store",
  });
  return res.json();
}
