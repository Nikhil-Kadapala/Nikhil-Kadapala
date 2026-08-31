import { UNLISTED_PAGE_ROBOTS } from "@/lib/schemas";
import { listSemesters } from "@/lib/teaching";
import { CourseCard } from "@/components/teaching/CourseCard";

export const metadata = {
  title: "Teaching",
  description: "Office hours, Canvas links, and scheduling for the courses I TA.",
  robots: UNLISTED_PAGE_ROBOTS,
};

export default function Teaching() {
  const semesters = listSemesters();

  return (
    <>
      <section className="page-head wrap">
        <p className="eyebrow mono">Teaching</p>
        <h1>Office hours, in one place.</h1>
        <p>Course resources and scheduling for the sections I TA. Pick a course below.</p>
      </section>
      {semesters.map((semester) => (
        <section key={semester.semester} className="section section-dark">
          <div className="wrap">
            <p className="eyebrow mono">{semester.semesterLabel}</p>
            <div className="grid-2">
              {semester.courses.map((course) => (
                <CourseCard key={course.code} course={course} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
