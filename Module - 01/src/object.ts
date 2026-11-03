const user : {
    name : string ;
    age : number;
    isStudent : boolean;
    action : ()=> void;
    instituteDetails : string[];
} = {
    name : "Mezba Morsalin",
    age : 24,
    isStudent : true,
    action : () => console.log("Yes"),
    instituteDetails : ["National University of Bangladesh", "Department of Management"]
}

console.log(user);

type userDetails = {
    name : string ;
    age : number;
    isJobHolder : boolean;
    action : () => void;
    companyDetails : string[];
}

interface userDetailsTwo  {
    name : string ;
    age : number;
    isJobHolder : boolean;
    action : () => void;
    companyDetails : string[];
}

const thisUser : userDetails = {
    name : "Mezba Morsalin",
    age : 24,
    isJobHolder : false,
    action : ()=> console.log("No"),
    companyDetails : ["to be hired In Sha Allah"]
}

console.log("User Job Details", thisUser);