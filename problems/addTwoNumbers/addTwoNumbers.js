function ListNode(val) {
    this.val = val;
    this.next = null;
}

function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) list = {val: array[i], next: list};
    return list;
}

var addTwoNumbers = function (l1, l2) {   
    // if one is missing, take the other   
    if (!l1 || !l2) return l1 ? l1 : l2;   
    let pureInstance = new ListNode(null),        
    currentInstance = pureInstance,        
    carry = 0,        
    num1 = 0,        
    num2 = 0,       
    addedNumsWithCarry = 0;   
    // as long as one is here or carrying   
    const getValOrZero = (exist) => { return exist ? exist.val : 0 };   
    const getNextInnerVal = (obj) => { return obj.val };
    while (l1 || l2 || carry) {
        num1 = getValOrZero(l1);
        num2 = getValOrZero(l2);
        addedNumsWithCarry = num1 + num2 + carry;
        currentInstance.next = new ListNode(addedNumsWithCarry % 10);               
        // is there carry ? 1 : 0       
        carry = addedNumsWithCarry >= 10 ? 1 : 0;               
        // keep the loop going, for is there a next condition        
        if(l1) l1 = l1.next;       
        if(l2) l2 = l2.next;       
        currentInstance = currentInstance.next;   
        }   
// end with a null value;   
   return pureInstance.next;
};

console.log(addTwoNumbers(arrayToList([3,2,3,7,8,4,3,2,4,5]),arrayToList([8,9,8,4,1,2])));

module.exports = addTwoNumbers;
