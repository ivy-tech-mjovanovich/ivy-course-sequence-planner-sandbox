// No need to change these.
export const semesterNodes = [
  { id: "F1", type: "semester", data: { label: "S1 (Fall)" } },
  { id: "F2", type: "semester", data: { label: "S2 (Fall)" } },
  { id: "S3", type: "semester", data: { label: "S3 (Spring)" } },
  { id: "S4", type: "semester", data: { label: "S4 (Spring)" } },
  { id: "F5", type: "semester", data: { label: "S5 (Fall)" } },
  { id: "F6", type: "semester", data: { label: "S6 (Fall)" } },
  { id: "S7", type: "semester", data: { label: "S7 (Spring)" } },
  { id: "S8", type: "semester", data: { label: "S8 (Spring)" } },
];

// All of the courses go here.
export const courseNodes = [
  // Gen Ed
  {
    id: "COMM101",
    programCore: ["AAS"],
    data: { label: "COMM 101 - Public Speaking" },
  },
  {
    id: "ENGL111",
    programCore: ["AAS"],
    data: { label: "ENGL 111 - English Composition" },
  },
  {
    id: "MATH136",
    programCore: ["AAS"],
    data: { label: "MATH 136 - College Algebra" },
  },
  {
    id: "HUMANITIES",
    programCore: ["AAS"],
    data: { label: "Humanities Elective" },
  },
  {
    id: "SCIENCE",
    programCore: ["AAS"],
    data: { label: "Science Elective" },
  },

  // Technical
  {
    id: "CPIN269",
    programCore: ["AAS"],
    data: { label: "CPIN 269 - Information Technology Project Management" },
  },
  {
    id: "CPIN279",
    programCore: ["AAS"],
    data: { label: "CPIN 279 - Information Technology Capstone" },
  },
  {
    id: "DBMS110",
    programCore: ["AAS", "fullStack"],
    data: { label: "DBMS 110 - Database Management Systems" },
  },
  {
    id: "INFM109",
    programCore: ["AAS"],
    data: { label: "INFM 109 - Informatics and Human-Computer Interaction" },
  },
  {
    id: "SDEV120",
    programCore: ["AAS", "fullStack"],
    data: { label: "SDEV 120 - Computing Logic" },
  },
  {
    id: "SDEV140",
    programCore: ["AAS", "fullStack"],
    data: { label: "SDEV 140 - Introduction to Software Development" },
  },
  {
    id: "TEST",
    programCore: ["AAS"],
    data: { label: "A test node" },
  },

  // Add the rest of your courses; organize and label programCore as you see fit...
];

export const courseEdges = [
  // ID is any unique name.
  // Source and target are the ids of the nodes they connect.
  { id: "e-120-140", source: "SDEV120", target: "SDEV140" },
  { id: "e-140-269", source: "SDEV140", target: "CPIN269" },

  // These are left in to give you an example.
  // Edges with the recommended attribute set will have a pink edge.
  // Corequisites will be a dashed edge.
  // { id: "e-104-153", source: "VISC104", target: "SDEV153", recommended: true },
  // { id: "e-120-153", source: "SDEV120", target: "SDEV153", corequisite: true },
];
