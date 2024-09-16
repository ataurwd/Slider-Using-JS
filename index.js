function calculateFinalScore(obj) {
    
    if(typeof obj !== 'object'){
        return "Invalid Input";
    }
    let totalScore = obj.testScore + obj.schoolGrade
    if(obj.isFFamily ){
        totalScore += (totalScore + 20);
    }
    if(totalScore >=80){
        return true;
    }
    else{

        return false;
    }  
}
