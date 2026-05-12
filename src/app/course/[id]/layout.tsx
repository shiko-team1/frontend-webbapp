export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10 bg-zinc-50 min-h-screen">
      {children}
    </div>
  );
}
