// Priority Queue implemented using a Min-Heap
class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    getP(i) { return Math.floor((i - 1) / 2); }
    getL(i) { return 2 * i + 1; }
    getR(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert value with given priority
    enqueue(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.heapifyUp();
    }

    heapifyUp() {
        let idx = this.heap.length - 1;

        while (idx > 0) {
            let p = this.getP(idx);

            // compare by priority
            if (this.heap[idx].priority < this.heap[p].priority) {
                this.swap(idx, p);
                idx = p;
            } else {
                break;
            }
        }
    }

    // Remove the element with smallest priority
    dequeue() {
        if (this.heap.length === 0) return null;

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return min;
    }

    heapifyDown(i) {
        let smallest = i;
        let left = this.getL(i);
        let right = this.getR(i);

        if (left < this.heap.length && this.heap[left].priority < this.heap[smallest].priority) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right].priority < this.heap[smallest].priority) {
            smallest = right;
        }

        if (smallest !== i) {
            this.swap(i, smallest);
            this.heapifyDown(smallest);
        }
    }

    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

// EXAMPLE USE
const pq = new PriorityQueue();

pq.enqueue("low priority task", 5);
pq.enqueue("high priority", 1);
pq.enqueue("medium priority", 3);

console.log(pq.dequeue());   // { value: 'high priority', priority: 1 }
console.log(pq.dequeue());   // { value: 'medium priority', priority: 3 }
console.log(pq.dequeue());   // { value: 'low priority task', priority: 5 }
