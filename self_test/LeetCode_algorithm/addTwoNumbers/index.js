var addTwoNumbers = function(l1, l2) {
    var dummyHead = new ListNode(0);
    var p = l1,
        q = l2, 
        curr = dummyHead;
    var carry = 0;
    while (p != null || q != null) {
        var x = (p != null) ? p.val : 0;
        var y = (q != null) ? q.val : 0;
        var sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    console.log(dummyHead.next);
};

function ListNode(val) {
    this.val = val;
    this.next = null;
};

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

addTwoNumbers(l1, l2);