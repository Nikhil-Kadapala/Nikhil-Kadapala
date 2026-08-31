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
