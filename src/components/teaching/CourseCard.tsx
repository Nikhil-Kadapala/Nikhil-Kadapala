import Link from "next/link";
import type { Course } from "@/lib/teaching";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/teaching/${course.semester}/${course.code}`} className="block h-full text-inherit no-underline">
      <Card className="h-full cursor-pointer">
        <CardHeader>
          <CardTitle>{course.courseLabel}</CardTitle>
          <CardDescription>{course.title}</CardDescription>
          <CardAction>
            <span className="tag">{course.semesterLabel}</span>
          </CardAction>
        </CardHeader>
        <CardFooter className="justify-between">
          <span className="mono muted">{course.role}</span>
          <span className="link-arrow">Office hours</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
