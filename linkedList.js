export class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    // prepend(value) adds a new node containing value to the start of the list
    prepend(value) {
        const node = new Node(value, this.head);
        this.head = node;
        this.length++;
    }
    //at(index) returns the node at the given index
    at(index){
        if(index < 0 || index >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }
    //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    toString(){
        let output = "";
        let current = this.head;
        while(current){
            output = `${output}( ${current.val} ) -> `;
            current = current.next;
        }
        console.log(`${output}null`);
    }
    //insertAt(index, value) that inserts a new node with the provided value at the given index.
    insertAt(index, value){
        if (index === 0 ) return this.prepend(value);
        
        const prev = this.at(index - 1);
        if (prev == null) return null;

        prev.next = new Node(value, prev.next);
        this.length++;
    }
    //removeAt(index) that removes the node at the given index.
    removeAt(index){
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
        }

        const prev = this.at(index - 1);
        if (prev == null) return null;

        prev.next = prev.next.next;
        this.length--;
    }
}

class Node {
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

LinkedList.fromValues = (...values) => {
    const ll = new LinkedList();

    // getting values in reverse order to insert at the head in our linked list
    for (let i = values.length - 1; i >= 0; i--){
        ll.prepend(values[i]);
    }
    return ll;
}
