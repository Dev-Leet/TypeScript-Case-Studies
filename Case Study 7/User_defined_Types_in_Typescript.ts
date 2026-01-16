enum Role { Doctor, Nurse, Admin }

interface Staff {
    id : number;
    name : string;
    role : Role;
}

let staff_members : Staff[] = [
    { id : 1, name : "Dr. Strange", role : Role.Doctor},
    { id : 2, name : "Black Widow", role : Role.Nurse},
    { id : 3, name : "Albert Einstein", role : Role.Admin}
]

// Function to print summary of all staff members
function Staff_Summary(s : Staff[]) : void {          //return type array of staff
    for ( let i of s ) {
        console.log (` The role of ${i.name} is ${Role[i.role]}. `);
    }
}

Staff_Summary(staff_members);