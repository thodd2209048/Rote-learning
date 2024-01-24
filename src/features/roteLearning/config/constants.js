// const articleStatuses = ["IN_PROGRESS", "COMPLETED"];
// const articleRepetitions = [
//   "FIRST_READING",
//   "FIRST_RE_READING",
//   "SECOND_RE_READING",
//   "THIRD_RE_READING",
//   "FOURTH_RE_READING",
//   "COMPLETED",
// ];
// const articleTypes = ["ARTICLE", "VIDEO", "NOTE"];

const articleStatuses = ["in_progress", "completed"];
const articleRepetitions = [
  { value: "first reading", nextPeriod: "1" },
  { value: "1", nextPeriod: "3" },
  { value: "2", nextPeriod: "7" },
  { value: "3", nextPeriod: "16" },
  { value: "4", nextPeriod: "60" },
  { value: "completed", nextPeriod: "completed" },
];
const articleTypes = ["article", "video", "note"];

export { articleStatuses, articleRepetitions, articleTypes };
