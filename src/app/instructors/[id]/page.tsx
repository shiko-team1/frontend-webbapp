import Link from "next/link";
import { InstructorHeader } from "@/features/instructor/components/InstructorHeader";
import { InstructorCoursesSection } from "@/features/instructor/components/InstructorCoursesSection";
import {
  getInstructor,
  getInstructorCourses,
} from "@/features/instructor/lib/api";

export default async function InstructorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [instructor, courses] = await Promise.all([
    getInstructor(id),
    getInstructorCourses(id),
  ]);

  return (
    <main className="min-h-screen bg-[#f6f7fb] p-6 font-[var(--font-body)]">
        <div className="mx-auto max-w-[620px]">
            <Link href="/" className="text-sm font-medium text-[var(--primary-color)]">
            ← Back
            </Link>

       <div className="mt-6">
         <InstructorHeader instructor={instructor} />
         <InstructorCoursesSection courses={courses} />
       </div>
       </div>
   </main>
  );
}