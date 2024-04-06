// import './style.css';

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
// };

function linkedList() {
    function append(value) {
        let newNode = node();
        newNode.value = value;

        let tmp = this;
        if (!tmp.value && tmp.value !== 0) {
            this.value = newNode.value;
            this.next = newNode.next;
        } else {
            while (tmp.next) {
                tmp = tmp.next;
            }
            tmp.next = newNode;
        }
    }

    function prepend(value) {
        let newNode = node();
        newNode.value = value;
        let tmp = {};
        tmp.value = this.value;
        tmp.next = this.next;

        this.value = value;
        this.next = tmp;
    }

    function size() {
        let nodes = 0;
        let list = Object.assign({}, this);
        while (list.next !== null) {
            if (list.value || list.value === 0) nodes++;
            list = list.next;
        }
        if (list.value || list.value === 0) nodes++;

        return nodes;
    }

    function head() {
        return { value: this.value, next: this.next };
    }

    function tail() {
        let list = Object.assign({}, this);
        while (list.next !== null) list = list.next;

        return { value: list.value, next: list.next };
    }

    function at(index) {
        let list = Object.assign({}, this);

        for (let i = 0; i <= index; i++) {
            if (i === index) return { value: list.value, next: list.next };
            list = list.next;
        }
    }

    function pop() {
        let tmp = this;

        while (tmp.next.next !== null) tmp = tmp.next;
        tmp.next = null;
    }

    function contains(value) {
        let list = Object.assign({}, this);
        while (list.next !== null) {
            if (list.value === value) return true;
            list = list.next;
        }
        if (list.value === value) return true;

        return false;
    }

    function find(value) {
        let list = Object.assign({}, this);
        let i = 0;

        do {
            if (list.value === value) return i;
            list = list.next;
            i++;
        } while (list);
        return null;
    }

    function toString() {
        let list = Object.assign({}, this);
        let string = '';

        while (list) {
            if (list.value || list.value === 0) string += `( ${list.value} ) -> `;
            list = list.next;
        }
        string += 'null';
        return string;
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
    };
}

function node() {
    this.value = null;
    this.next = null;

    return { value, next };
}

let list = linkedList();
// list.append(2);
// list.append(3);
list.prepend(1);
list.prepend(0);
// list.append(4);
// list.append(4);
// list.append(5);

console.log(list.toString());
