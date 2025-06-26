/** Partial */
interface collegeType {
    name: string;
    location: string;
    students: number;
    branches: number;
}
declare let collegeData: Partial<collegeType>;
declare function getCollegeData(data: Partial<collegeType>): Partial<collegeType>;
/** Required */
interface collegeType2 {
    name: string;
    location: string;
    students: number;
    branches?: number;
}
declare function getCollegeData2(data: Required<collegeType2>): Required<collegeType2>;
/** Readonly */
declare let collegeType4: Readonly<collegeType>;
/** Pick */
declare let collegeType5: Pick<collegeType, "name" | "students">;
