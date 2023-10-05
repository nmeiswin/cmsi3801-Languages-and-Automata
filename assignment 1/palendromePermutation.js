



function map2Set(map) {
    const iterator = map.values;
    var all2 = true
    valArray = Array.from(map.values());
    var vals = new Set();
    for(const value of map.values()) {
        vals.add(value)
    }
    return vals
}


function canBePalendrome(str) {

    var str = str.replace(/\s/g, '').toLowerCase();
    var map = new Map()
    var strArray = str.split("")
    for(var i = 0; i < strArray.length;i++) {
        var l = strArray[i]
        if (map.has(l)) {
            map.set(l,map.get(l)+1)
        }
        else {
            map.set(l,1)
        }
    }
    var set = map2Set(map)
    const setArray = Array.from(set);
    allEven = true
    numNotEven = 0;
    for(const value of setArray) {
        if (value%2 != 0){
            allEven = false
            numNotEven++
        }
    }

    if(allEven){
        return true
    }
    else {
        if(numNotEven == 1) {
            return true
        }
        return false
    }

}

console.log("Non-Case Sensative Non-permutation Sensative Palendrome Checker")

    console.log("Test Case 1: rAce Ca rr")
    var result0 = canBePalendrome("rAce Ca rr");
    console.log(`Result = ${result0}`)
    console.log("Test Case 2: rAce rac")
    var result1 = canBePalendrome("rAce rac");
    console.log(`Result = ${result1}`)
    console.log("Test Case 2: Tact coa")
    var result2 = canBePalendrome("Tact coa");
    console.log(`Result = ${result2}`)


