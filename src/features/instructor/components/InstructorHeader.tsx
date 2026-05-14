import { Mail, MessageCircle, Phone } from "lucide-react";
import { Instructor } from "../types/Instructor";
import Image from "next/image";

type Props = {
  instructor: Instructor;
};

export function InstructorHeader({ instructor }: Props) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm">
      <div className="flex items-start gap-5">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
           <Image
              src={instructor.imageUrl}
              alt={instructor.name}
              fill
              className="object-cover"
           />
        </div>

        <div>
          <h1 className="text-xl font-bold text-[var(--secondary-color)]">
            {instructor.name}
          </h1>

          <p className="mt-1 text-sm text-[var(--gray-color)]">
            {instructor.title}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f7fb] text-[var(--gray-color)]">
              <Mail size={16} />
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f7fb] text-[var(--gray-color)]">
              <Phone size={16} />
            </button>

            <button className="inline-flex items-center gap-2 rounded-full bg-[var(--primary-color)] px-5 py-2 text-sm font-semibold text-white">
              <MessageCircle size={16} />
              Chat
            </button>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <h2 className="text-lg font-bold text-[var(--secondary-color)]">
          About Instructor
        </h2>

        <p className="mt-3 max-w-4xl text-sm leading-6 text-[var(--gray-color)]">
          {instructor.bio}
        </p>
      </div>
    </section>
  );
}