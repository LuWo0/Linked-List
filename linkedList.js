export class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    //append(value) adds a new node containing value to the end of the list
    append(value) {
        const node = new Node(value, null);
        if (this.head == null) {
            this.head = node;
            this.length++;
            return this.head;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = node;
        this.length++;
    }
    // prepend(value) adds a new node containing value to the start of the list
    prepend(value) {
        const node = new Node(value, this.head);
        this.head = node;
        this.length++;
    }
    //size returns the total number of nodes in the list
    size() {
        return this.length;
    }
    //getHead returns the first node in the list
    getHead() {
        if(this.head == null) return null;
        return this.head;
    }
    //getTail returns the last node in the list
    getTail() {
        if(this.head == null) return null;
        if(this.length === 1) return this.getHead();
        
        let current = this.head;
        for (let i = 0; i < this.size() - 1; i++){
            current = current.next;
        }
        return current;
    }
    //pop removes the last element from the list
    pop() {
        if(this.head == null) return null;
        if(this.length === 1) {
            this.head = this.head.next;
            this.length--;
        }
        return this.removeAt(this.length - 1); 

    }
    //contains(value) returns true if the passed in value is in the list and otherwise returns false.
    contains(value){
        if (this.length === 0) return false;
        let current = this.head;
        while(current){
            if(current.val === value) return true;
            current = current.next;
        }
        return false;
    }
    // find(value) returns the index of the node containing value, or null if not found.
    find(value){
        if (this.length === 0) return null;
        let index = 0;
        let current = this.head;
        while(current){
            if (current.val === value) return index;
            current = current.next;
            index++;
        }
        return null;
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
        if (index === 0) { //removes head
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
