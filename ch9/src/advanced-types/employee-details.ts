export interface Person {
  name: string;
}

export interface Employee {
  id: number;
}

export type EmployeeDetails = Person & Employee;

export const employeeDetails: EmployeeDetails = {
  name: 'Alice',
  id: 101
};
