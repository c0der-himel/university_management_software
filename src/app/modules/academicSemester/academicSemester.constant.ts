import {
  IAcademicSemesterCodes,
  IAcademicSemesterMonths,
  IAcademicSemesterTitles,
} from './academicSemester.interface';

export const academicSemesterMonths: IAcademicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitles: IAcademicSemesterTitles[] = [
  'Spring',
  'Fall',
];

export const academicSemesterCodes: IAcademicSemesterCodes[] = ['01', '02'];

export const academicSemesterTitleCodeMapper: { [key: string]: string } = {
  Spring: '01',
  Fall: '02',
};
