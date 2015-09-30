//$("#main").append("Hao Wu");
//var awesomeThoughts = "I am Hao Wu and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);
var bio = {
    "name":"Hao Wu",
    "role":"Web Developer",
    "contacts": {
        "mobile":"347-857-9392",
        "email":"wuhao@nyu.edu",
        "github":"wuhao007",
        "twitter":"@wuhao007",
        "location":"New York"
    },
    "WelcomeMessage":"Alles Gute",
    "skills": [
        "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
    ],
    "bioPic":"images/fry.jpg"
}

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var work = {};
work.position = "Fullstack Developer";
work.employer = "Ensa";
work.years = 1;

var education = {
    "schools": [
        {
            "name":"New York University",
            "city":"New York, NY, US",
            "degree":"Master",
            "major":["CS"],
            "dates":2014,
            "url":"http://www.nyu.edu"
        },
        {
            "name":"Fudan University",
            "city":"Shanghai, CN",
            "degree":"Master",
            "major":["CE"],
            "dates":2011,
            "url":"http://fudan.edu.cn"
        },
        {
            "name":"Hefei University of Technology",
            "city":"Hefei, CN",
            "degree":"BA",
            "major":["EE"],
            "dates":2011,
            "url":"http://www.hfut.edu.cn"
        }
    ],
    "onlineCourses": [
        {
            "title":"javascript Crash Course",
            "school":"Udacity",
            "date":2014,
            "url":"http://www.udacity.com/course/ud804"
        }
    ]
};

$("#main").append(work["position"]);
var work = {
    "jobs": [
        {
            "employer":"Ensa",
            "title":"Full­stack developer",
            "date":"June 23, 2014 - Now",
            "description":"Conceive, design, and implement cognitive recommendation system for ensa application. Train and generate recommendations using Naive Bayes, Decision Tree on Rails for Ensa."
        },
        {
            "employer":"Urlinq",
            "title":"Back-EG 2014 - June 20, 2014",
            "description":"Create tags using Naive Bayes in PHP. Query course data from social network on MySQL."
        },
        {
            "employer":"Synopsys",
            "title":"R&D Engineer",
            "date":"March 21, 2012 - August 23, 2013",
            "description":"Implemented Monet, a new voltage-aware static checker for rapid power management verification. Implemented Database and UPF query tcl commands. Implemented fork and feedthrough checker using C++ and Boost for AMD."
        },
        {
            "employer":"Cadence Design Systems",
            "title":"Member of Technical Staff",
            "date":"March 1, 2010 - March 20, 2012",
            "description":"Leader of thermal analysis team; Default engineer of clock tree synthesis team; Code reviewer of low power team. Implemented half-node thermal analysis for the 3D-IC simulation for Samsung using C++. Optimized the Finite Element Analysis and got a precise thermal simulation result in 3D-IC using C++. Investigated a fast transient thermal analysis method for Qualcomm using matlab. Optimized a balanced clock tree algorithm for Fujitsu integrated chip using C++. Won 3 Instant Recognition rewards for reviewing code of low power team."
        }, 
        {
            "employer":"GE",
            "title":"Intern",
            "date":"February 1, 2010 - February 26, 2010",
            "description":"Intern in Programmable Logic Controller team. Implemented smoke testing to test Programmable Logic Controller using Python."
        }
    ]
}
function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
        $(".work-entry:last").append(formattedDates);
        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();
var projects = {
    "projects" : [
        { 
            "title":"Hex",
            "date":"2014",
            "decription":"Implemented Hex using C++ and evaluated each step by a Monte Carlo Algorithm.",
            "images": [
            ]
        }
    ]
}
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        $(".project-entry:last").append(formattedDates);
        formattedDescription = HTMLprojectDates.replace("%data%", work.jobs[job].description);
        $(".project-entry:last").append(formattedDescription);

    }
}
function inName(name) {
    name = name.trim.split(" ");
    console.log(name);
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);
