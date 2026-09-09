/** Calendly iframe appearance. Hex without `#`, mirrored from `:root` in globals.css. */
const CALENDLY_EMBED = {
  embed_domain: "nikhill.me",
  embed_type: "Inline",
  hide_gdpr_banner: "1",
  background_color: "000000",
  text_color: "f0f0f0",
  primary_color: "f0a35a",
} as const;

export function calendlyEmbedSrc(url: string): string {
  const src = new URL(url);
  for (const [key, value] of Object.entries(CALENDLY_EMBED)) {
    src.searchParams.set(key, value);
  }
  return src.toString();
}

export type Course = {
  semester: string;
  semesterLabel: string;
  code: string;
  courseLabel: string;
  title: string;
  role: string;
  department: string;
  officeHours: string;
  canvasUrl: string;
  calendlyUrl: string;
};

export const courses: Course[] = [
  {
    semester: "fall-2026",
    semesterLabel: "Fall 2026",
    code: "cs410c",
    courseLabel: "CS 410C",
    title: "Intro Scientific Programming/C",
    role: "Teaching Assistant",
    department: "Department of Computer Science, University of New Hampshire",
    officeHours: "Tue & Thu, 9–11am",
    canvasUrl: "https://unh.instructure.com/courses/150289",
    calendlyUrl: "https://calendly.com/nikhillk/ta-cs410c",
  },
  {
    semester: "fall-2026",
    semesterLabel: "Fall 2026",
    code: "cs752",
    courseLabel: "CS 752/852",
    title: "Foundations of Neural Networks",
    role: "Teaching Assistant",
    department: "Department of Computer Science, University of New Hampshire",
    officeHours: "Tue & Thu, 9–11am",
    canvasUrl: "https://unh.instructure.com/courses/152824",
    calendlyUrl: "https://calendly.com/nikhillk/cs752-ta-office-hours",
  },
];

export function listSemesters(): { semester: string; semesterLabel: string; courses: Course[] }[] {
  const bySemester = new Map<string, { semester: string; semesterLabel: string; courses: Course[] }>();
  for (const course of courses) {
    const entry = bySemester.get(course.semester);
    if (entry) {
      entry.courses.push(course);
    } else {
      bySemester.set(course.semester, {
        semester: course.semester,
        semesterLabel: course.semesterLabel,
        courses: [course],
      });
    }
  }
  return Array.from(bySemester.values());
}

export function getCourse(semester: string, code: string): Course | null {
  return courses.find((course) => course.semester === semester && course.code === code) ?? null;
}
