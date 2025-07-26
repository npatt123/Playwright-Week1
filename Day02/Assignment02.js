//var inside block

const browserVersion1 = "Chrome";

function getBrowserVersion1(){
    if(browserVersion1 === "Chrome"){
        var  browserVersion1 = "Chrome1";
        console.log(browserVersion1);
        console.log("Brower version matches");}
       

    else{
        console.log("Browser version doesnt match");
    }
    console.log(browserVersion);
}

 getBrowserVersion1();

// let inside block
/*
const browserVersion = "Chrome";

function getBrowserVersion(){
    if(browserVersion === "Chrome"){
        let browserVersion = "Chrome1";
        console.log(browserVersion);
        console.log("Brower version matches");}
       

    else{
        console.log("Browser version doesnt match");
    }
    console.log(browserVersion);
}

 getBrowserVersion();

 */