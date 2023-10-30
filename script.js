//for the given JSON iterate overall for loops(for,for in,for of)
let stationaryshop=[{
                    "writing":"pen",
                    "colour":"sketch",
                    "cleaner":"eraser",
                    "measurement":"scale"}]
console.log(stationaryshop)   

//using for loop:
for(let i=0;i<stationaryshop.length;i=i+1)
{
    console.log(stationaryshop[i])
}   

//using for in loop:
for(let index in stationaryshop)
{
    console.log(stationaryshop[index].measurement)
}

//using for of loop:
for(let val of stationaryshop)
{
    console.log(val.writing,val.colour,val.cleaner,val.measurement)
}


//create your own resume data in JSON format:

let resume={
    "name":"dhoni",
    "dob":"18.01.1993",
    "age":"30",
    "education":["10th","diploma","B.E"],
    "address":["abcd street","630001","madurai","tamilnadu"],
    "hobbies":["painting","listeningmusic","handcrafts"],
    "strengths":"positive thinker",
    "maritalstatus":"no",
    "sex":"female",
    "fathername":"antony",
    "date":"30.10.2023",
    "place":"madurai"}
console.log(resume);
console.log(resume.name);
console.log(resume.dob);
console.log(resume.age);
console.log(resume.education[0],resume.education[1],resume.education[2]);
console.log(resume.address[0],resume.address[1],resume.address[2],resume.address[3],);
console.log(resume.hobbies[0],resume.hobbies[1],resume.hobbies[2],);
console.log(resume.strengths);
console.log(resume.maritalstatus);
console.log(resume.sex);
console.log(resume.fathername);
console.log(resume.date);
console.log(resume.place);




