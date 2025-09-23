// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
    const result = new ListNode(0);
    let current = result;
    let rem = 0
    while(l1 !== null || l2 !== null) {
        let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + rem;
        rem = 0;
        if(val > 9) {
            rem = Math.floor(val / 10);
            val = val % 10

        }
        // current.val = val;
        current.next = new ListNode(val)
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    if(rem > 0) {
        current.next = new ListNode(rem)
    }
    return result.next;
};