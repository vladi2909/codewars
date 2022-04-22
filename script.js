function numberOfPairs(gloves) {
    let sum = 0;
 
    const obj = gloves.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    for (let prop of Object.values(obj)) {
       if (prop >= 2) {
           sum += prop % 2 === 0 ? (+prop / 2) : (+prop - 1) / 2;
       }
    }

    return sum;
}