/** Partial */
interface collegeType {
  name: string;
  location: string;
  students: number;
  branches: number;
}

let collegeData: Partial<collegeType> = {
  name: "Dhaka College",
  location: "Dhanmondi, Dhaka",
};

function getCollegeData(data: Partial<collegeType>) {
  return data;
}

getCollegeData({ name: "City College", students: 3500 });

/** Required */
interface collegeType2 {
  name: string;
  location: string;
  students: number;
  branches?: number; // this is optional
}

function getCollegeData2(data: Required<collegeType2>) {
  return data;
}

getCollegeData2({
  name: "City College",
  location: "Dhaka",
  students: 3500,
  branches: 500,
});

/** Readonly */

let collegeType4: Readonly<collegeType> = {
  name: "Rifles College",
  location: "Rajshahi",
  students: 18000,
  branches: 50,
};

collegeType4.name = "Rifles College, Rajshahi"; // not possible

/** Pick */

let collegeType5: Pick<collegeType, "name" | "students"> = {
  name: "Rifles College",
  students: 18000,
};
