// create linked list at last. insertLast() : void
// create linked list at beginning. insertStart() : void
// create linked list at given position insertPos() : void
// create linked list and place it according to user's arrangement insert() : void
// delete specific linked list according to the user's requirement delete(data) : boolean
// show all data inside the linked list traverse() : linkedList

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAtStart(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    #getLastNode() {
        let current = this.head;

        while(current.next) {
            current = current.next;
        }

        return current;
    }
    insertAtLast(data) {
        const lastNode = this.#getLastNode();
        lastNode.next = new Node(data);
        this.size++;
    }

    insertAtPos(data, position) {
        let i = 0;
        let current = this.head;
        let prev = 0;
        if(this.size < position) return 0;
        while(i !== position) {
            prev = current;
            current = current.next;
            i++;
        }
        if(!i) {
            this.head = new Node(data, current);
            return;
        }
        prev.next = new Node(data, current);
        this.size++;
    }

    #traverse(linkedList) {
        let current = linkedList;
        return current.next;
    }

    search(data) {
        let current = this.head;
        let position = 0;
        let prev = null;

        while(current.next != null) {
            if(current.data == data) return position;
            current = this.#traverse(current);
            position++;
        }
        if(current.data == data) return position;
        return null;
    }

    delete(data) {
        let current = this.head;
        let prev = 0;

        while(current.next) {

            if(current.data == data) {
                if(prev)
                    prev.next = current.next;
                else 
                    this.head = current.next;
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
        }
        if(!current.next) {
            prev.next = null;
        }
    }

    test() {
        let current = this.head;
        let data = [];
        while(current.next) {
            data.push(current.data);
            current = current.next;
        }
        data.push(current.data);
        console.table(data);
    }
}

const ll = new linkedList();
ll.insertAtStart(1);
ll.insertAtStart(2);
ll.insertAtLast(14);
ll.insertAtLast(3);
ll.insertAtLast(4);
ll.insertAtPos("hashim", 4);
console.log(ll.search("1"));
ll.delete("hashim");
ll.test();
console.log(ll);
