import { LinkedList } from "./linkedList.js";

describe("#prepend", () => {
    test("adds a new node containing value to the start of the list", () => {
        const ll = new LinkedList();
        ll.prepend(10);
        const oldHead = ll.head;
        ll.prepend(20);

        expect(ll.head.val).toBe(20);
        expect(ll.head.next).toBe(oldHead);
        expect(ll.length).toBe(2);        
    });
});

describe("#at", () => {
    describe("with index less than 0", () => {
        test("it returns null", () => {
            const ll = LinkedList.fromValues(10, 20);
            expect(ll.at(-1)).toBeNull();
        });
    });
    describe("with index greater than list length", () => {
        test("it returns null", () => {
            const ll = LinkedList.fromValues(10, 20);
            expect(ll.at(5)).toBeNull();
        });
    });
    describe("with index 0", () => {
        test("it returns the head of the list", () => {
            const ll = LinkedList.fromValues(10, 20);
    
            expect(ll.at(0).val).toBe(10);
        });
    });
    describe("with index in the middle", () => {
        test("it returns the element at that index", () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
    
            expect(ll.at(2).val).toBe(30);
        });
    });
});

describe("#insertAt", () => {
    describe("with an index less than 0", () => {
        test("it does not insert anything", () => {
            const ll = LinkedList.fromValues(10, 20);
            ll.insertAt(-1, 30);
            expect(ll.length).toBe(2);
        });

    });

    describe("with an index greater than the length of the list", () => {
        test("it does not insert anything", () => {
            const ll = LinkedList.fromValues(10, 20);
            ll.insertAt(5, 30);
            expect(ll.length).toBe(2);
        });
    });

    describe("with an index of 0", () => {
        test("it should insert at the head", () => {
            const ll = LinkedList.fromValues(10, 20);
            ll.insertAt(0, 30);
            expect(ll.head.val).toBe(30);
            expect(ll.head.next.val).toBe(10);
            expect(ll.length).toBe(3);
        });
    });

    describe("with an index somewhere in the middle of the list", () => {
        test("insert at a given index", () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            ll.insertAt(2, 50);
            const node = ll.at(2);
            expect(node.val).toBe(50);
            expect(node.next.val).toBe(30);
            expect(ll.length).toBe(5);
        });
    });
});

describe("#removeAt", () => {
    describe("with an index less than 0", () => {
        test("it does not remove anything", () => {
            const ll = LinkedList.fromValues(10, 20);
            ll.removeAt(-1);
            expect(ll.length).toBe(2);
        });
    });

    describe("with an index greater than the length of the list", () => {
        test("it does not remove anything", () => {
            const ll = LinkedList.fromValues(10, 20);
            ll.removeAt(5);
            expect(ll.length).toBe(2);
        });
    });

    describe("with an empty list", () => {
        test("it does not remove anything and returns null", () => {
            const ll = new LinkedList();
            ll.removeAt(5);
            expect(ll.head).toBeNull();
            expect(ll.length).toBe(0);
        });
    });

    describe("with a valid index", () => {
        test("it should remove the node at the given index", () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            ll.removeAt(2);
            const node = ll.at(1);
            
            expect(node.val).toBe(20);
            expect(node.next.val).toBe(40);
            expect(ll.length).toBe(3);
        });
    });

    describe("with a index of 0", () => {
        test("it should remove the node at the head", () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            ll.removeAt(0);

            expect(ll.head.val).toBe(20);
            expect(ll.head.next.val).toBe(30);
            expect(ll.length).toBe(3);
        });
    });
});

describe("#append", () => {
    test("adds a new node containing value to the end of the list", () => {
        const ll = new LinkedList();
        ll.append(10);
        ll.append(20);

        expect(ll.head.val).toBe(10);
        expect(ll.length).toBe(2);        
    });
});

describe("#size", () => {
    test("returns the length of the list", () => {
        const ll = LinkedList.fromValues(10, 20, 30, 40);
        const ll2 = new LinkedList();
        expect(ll.size()).toBe(4);
        expect(ll2.size()).toBe(0);
    });
});

describe("#getHead", () => {
    describe("when the list is empty", () => {
        test("returns null", () => {
            const ll = new LinkedList();
            expect(ll.getHead()).toBeNull();
        });
    });
    describe("when there are elements in the list", () => {
        test("returns the head of the list", () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            expect(ll.getHead().val).toBe(10);
            ll.prepend(1);
            expect(ll.getHead().val).toBe(1);
        });
    });
});

describe("#getTail", () => {
    describe("when the list is empty", () => {
        test("returns null", () => {
            const ll = new LinkedList();
            expect(ll.getTail()).toBeNull();
        });
    });
    describe("when there are elements in the list", () => {
        test("returns the head of the list", () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            expect(ll.getTail().val).toBe(40);
            ll.append(1);
            expect(ll.getTail().val).toBe(1);
        });
    });
});

describe("#pop", () => {
    describe("when the list is empty", () => {
        test("return null", () => {
            const ll = new LinkedList();
            expect(ll.pop()).toBeNull();
        });
    });

    describe("when there is just one element in the list", () => {
        test("check to see if the size of the list is 0", () => {
            const ll = LinkedList.fromValues(10);
            ll.pop();
            expect(ll.length).toBe(0);
        });
    });

    describe("when there are elements in the list", () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            ll.pop();
            expect(ll.length).toBe(3);
            expect(ll.getTail().val).toBe(30);
    });
});

describe("#contains", () => {
    describe("when the list is empty", () => {
        test("returns false on an empty list", () => {
            const ll = new LinkedList();
            expect(ll.contains(10)).toBe(false);
        });
    });

    describe("when the value is not in the list", () => {
        test("returns false when the value is not found", () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            expect(ll.contains(2)).toBe(false);
        });
    });

    describe("when the value is in the list", () => {
        test("returns true when the value is found", () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            expect(ll.contains(30)).toBe(true);
        });
    });
});

describe("#find", () => {
    describe("when the list is empty", () => {
        test("returns null when there are no elements in the list", () => {
            const ll = new LinkedList();
            expect(ll.find(10)).toBeNull();
        });
    });

    describe("when the value is not in the list", () => {
        test("returns null when there are no indices that contain that value", () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            expect(ll.find(15)).toBeNull();
        });
    });

    describe("when the value is in the list", () => {
        test("returns the index of the value", () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            expect(ll.find(20)).toBe(1);
        });
    });
});