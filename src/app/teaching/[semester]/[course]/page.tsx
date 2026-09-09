import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UNLISTED_PAGE_ROBOTS } from "@/lib/schemas";
import { courses, getCourse } from "@/lib/teaching";
import { Button } from "@/components/ui/button";
import { ScheduleEmbed } from "@/components/teaching/ScheduleEmbed";

export function generateStaticParams() {
  return courses.map((course) => ({ semester: course.semester, course: course.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ semester: string; course: string }>;
}): Promise<Metadata> {
  const { semester, course: code } = await params;
  const course = getCourse(semester, code);
  if (!course) return { title: "Not found" };

  return {
    title: `${course.courseLabel} — ${course.role}`,
    description: `Office hours, Canvas link, and scheduling for ${course.courseLabel} (${course.title}), ${course.semesterLabel}.`,
    robots: UNLISTED_PAGE_ROBOTS,
  };
}

export default async function TeachingCourse({
  params,
}: {
  params: Promise<{ semester: string; course: string }>;
}) {
  const { semester, course: code } = await params;
  const course = getCourse(semester, code);
  if (!course) return notFound();

  return (
    <article className="prose-page">
      <div className="wrap prose">
        <p className="eyebrow mono">
          {course.role} · {course.semesterLabel}
        </p>
        <div className="course-heading-row flex flex-wrap items-center gap-4">
          <h1>{course.courseLabel}</h1>
          <Button asChild>
            <Link href={course.canvasUrl}>Canvas ↗</Link>
          </Button>
        </div>
        <p className="lead">{course.title}</p>
        <div className="meta mono muted">{course.department}</div>
        <p>Office hours: {course.officeHours}. Drop by, or book a slot below.</p>
        <ScheduleEmbed
          src={course.calendlyUrl}
          description={`Book ${course.courseLabel} office hours`}
        />
        <p className="mt-12">
          <Link className="link-arrow" href="/teaching">
            Back to teaching
          </Link>
        </p>
      </div>
    </article>
  );
}
