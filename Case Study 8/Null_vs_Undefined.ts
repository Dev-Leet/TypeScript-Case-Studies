type Profile = {
    username : string;
    bio : string | null; //string or null
    avatarUrl ?: string; //optional and stirg
}

//Defining objects
let profile1 : Profile = { 
    username : "user1", 
    bio : null   //defineing null
};

let profile2 : Profile = {
    username : "user2",
    bio : "My hobby is coding.",
    avatarUrl : "http://example.com/avatar2.html"
};

function showProfile (p : Profile) : void {
    console.log (`Username : ${p.username} whose bio is ${(p.bio === null) ? "not provided" : p.bio} ${!(p.avatarUrl === undefined) ? "and avatar is at " + p.avatarUrl + "." : "."}`)
}

showProfile(profile1);
showProfile(profile2);