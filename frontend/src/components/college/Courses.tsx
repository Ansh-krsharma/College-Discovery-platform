import { BookOpen, Clock } from "lucide-react";
import type { Course } from "@/types/college";

interface Props {
  courses?: Course[];
}

export default function Courses({ courses = [] }: Props) {
  if (!courses.length) return null;

  return (
    <section className="mt-10">
      <h2 className="mb-5 text-2xl font-semibold text-slate-950 dark:text-white">Courses offered</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {courses.map((course, i) => (
          <div
            key={i}
            className="surface flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-blue-300 dark:hover:border-blue-700"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-slate-950 dark:text-white">{course.name}</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                <Clock className="h-3 w-3" /> {course.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}