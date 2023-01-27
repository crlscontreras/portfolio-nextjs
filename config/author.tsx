export interface Author {
  name: string;
  occupation: string;
  company?: string;
  resume?: string;
}
export const author: Author[] = [
  {
    name: "Carlos Contreras",
    occupation: "Software Engineer",
  },
];
