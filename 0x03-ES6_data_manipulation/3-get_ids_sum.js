export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (accumulator, current) => accumulator + current.id,
      0,
    );
  }
  return 0;
}
