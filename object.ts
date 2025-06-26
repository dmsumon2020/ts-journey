var userData: {
  name: string;
  age: number;
  occupation: string;
  permanent: boolean;
} = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
  permanent: true,
};
console.log(userData);

userData.name = "Rana vai";
console.log(userData);

var userData2: {
  name: string;
  age: number;
  occupation: string;
  permanent: boolean;
  company: string | undefined;
} = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
  permanent: true,
  company: undefined,
};

console.log("userData2", userData2);

userData2.company = "HCL";
console.log("userData2", userData2);

var userData3: {
  [key: string]: any;
} = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
  permanent: true,
};

userData3.city = "Bangalore";
console.log("userData3", userData3);

var nestedObj: {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    road: number;
  };
} = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    road: 30,
  },
};

console.log("nestedObj", nestedObj);

const nestedObj2: {
  [key: string]: string | number | { [key: string]: any };
} = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    road: 30,
  },
};

console.log("nestedObj2", nestedObj2);
