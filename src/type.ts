interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CoursePartBaseDescribe extends CoursePartBase {
  description: string;
}

interface CourseNormalPart extends CoursePartBaseDescribe {
  type: "normal";
}
interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartBaseDescribe {
  type: "submission";
  exerciseSubmissionLink: string;
}

interface CourseSpecialPart extends CoursePartBaseDescribe {
  type: "special";
  requirements: string[];
}

type CoursePart =
  | CourseSpecialPart
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart;

export default CoursePart;
