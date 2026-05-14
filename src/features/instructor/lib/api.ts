import { Instructor } from "../types/Instructor";
import { InstructorCourse } from "../types/InstructorCourse";

const API_BASE_URL = "https://shiko-instructor-api-larsa-fwhvbthud6arcadk.swedencentral-01.azurewebsites.net";

export async function getInstructor(id: string): Promise<Instructor> {
  const res = await fetch(`${API_BASE_URL}/api/instructors/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch instructor");
  }

  return res.json();
}

export async function getInstructorCourses(
  id: string
): Promise<InstructorCourse[]> {
  const res = await fetch(`${API_BASE_URL}/api/instructors/${id}/courses`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch instructor courses");
  }

  return res.json();
}