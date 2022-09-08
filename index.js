import { LinkedList } from "./linkedList.js";

const ll = LinkedList.fromValues(10, 20, 30, 40);
ll.toString();
ll.insertAt(2, 60);
ll.toString();