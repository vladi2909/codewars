function deepCount(a){
    
    if (a.length === 0) return 0;
    
    let strOfArray = JSON.stringify(a);
    let countBrackets = strOfArray.split("[").length - 1;
    let countDoubleBrackets = strOfArray.split("[]").length - 1;
    let commas = strOfArray.split(",").length - 1;

    if (countDoubleBrackets) {
        return countBrackets + commas - countDoubleBrackets;
    }
  
    return countBrackets + commas;
}