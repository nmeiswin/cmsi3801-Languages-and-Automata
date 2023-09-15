
//Node class to implement linked list
class Node {
    constructor(next,data) {
        this.next = next;
        this.data = data;
    }
    hasNext() {
        return this.next != null
    }
    getTail() {
        var tail = this;
        while (tail.hasNext()) {
            tail = tail.next;
        }
        return tail;
    }
    append(data) {
        var tail = this.getTail();
        tail.next = new Node(null,data)
    }
    //Creates linked list representation of words
    static createWord(string) {
        var stringArray = string.split("");
        var head = new Node(null,stringArray[0])
        for(var i = 1; i < stringArray.length; i++)
        {
            head.append(stringArray[i])
        }
        return head;
    }
}   
    console.log("Non-Case Sensative Palendrome Checker")

    console.log("Test Case 1: rAceCar")
    var word0 = Node.createWord("rAceCar");
    var result0 = checkPalendrome(word0)
    console.log(`Result = ${result0}`)

    console.log("Test Case 1: I")
    var word1 = Node.createWord("I");
    var result1 = checkPalendrome(word1)
    console.log(`Result = ${result1}`)

    console.log("Test Case 2: shasahs")
    var word2 = Node.createWord("shasahs");
    var result2 = checkPalendrome(word2)
    console.log(`Result = ${result2}`)

    console.log("Test Case 3: NoneDrome")
    var word3 = Node.createWord("NoneDrome");
    var result3 = checkPalendrome(word3)
    console.log(`Result = ${result3}`)

    console.log("Test Case 4: Closer")
    var word4 = Node.createWord("Closer");
    var result4 = checkPalendrome(word4)
    console.log(`Result = ${result4}`)



 function checkPalendrome(word) {
    var string = "" + word.data;
    for (let item = word.next; item!=null; item = item.next) {
       var string = string + item.data;
    }
    string = string.toLowerCase();
    var stringArray = string.split("")
    var revArray = stringArray.reverse();
    var revString = revArray.join("")
    return string == revString;
}

    