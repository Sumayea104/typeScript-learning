//union

type userRole   = "admin" | "user" | "editor";

const myRole: userRole = "admin";       

const getDashboard = (role: userRole) => {
    if(role === "admin"){
        return "show admin dashboard";  
    }
    else if(role === "user"){
        return "show user dashboard";  
    }
    else if(role === "editor"){
        return "show editor dashboard";  
    }
};

getDashboard("admin");
getDashboard("user");
getDashboard("editor");
// getDashboard("manager"); //error     

//intersection type

type Employee = {
    name: string;
    id: string;
    phoneNo: string;
    privileges: string[];
};

type Manager = {
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChwdhuryShaheb: EmployeeManager = {
    name: "Chowdhury Shaheb",
    id: "EMP001",   
    phoneNo: "1234567890",
    privileges: ["read", "write"],
    designation: "Software Engineer",
    teamSize: 5
};  