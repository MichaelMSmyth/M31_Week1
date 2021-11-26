function dataChecker(string, rank){
    if(string == "codenation" && rank == 1){
        console.log(`Correct! ${string} is number ${rank}.`);
    } else if(string == "codenation" && rank != 1){
        console.log(`Uhh! ${string} is right but the rank isn't ${rank}.`);
    } else {
        console.log(`Uhh! ${string} is wrong.`);
    }
}
dataChecker("codenation",2);