class MyQueue {
    constructor() {
      this.stack1 = []; // Stack for enqueue operations
      this.stack2 = []; // Stack for dequeue operations
    }
  
    // Add an element to the back of the queue
    enqueue(value) {
      this.stack1.push(value);
    }
  
    // Remove and return the front element of the queue
    dequeue() {
      // If stack2 is empty, transfer elements from stack1 to stack2
      if (this.stack2.length === 0) {
        // Transfer all elements from stack1 to stack2
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      // If stack2 is still empty, the queue is empty
      if (this.stack2.length === 0) {
        return undefined; // Queue is empty
      }
  
      // Pop the front element from stack2 (which was originally at the front of stack1)
      return this.stack2.pop();
    }
  
    // Peek at the front element of the queue without removing it
    peek() {
      // If stack2 is empty, transfer elements from stack1 to stack2
      if (this.stack2.length === 0) {
        // Transfer all elements from stack1 to stack2
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      // If stack2 is still empty, the queue is empty
      if (this.stack2.length === 0) {
        return undefined; // Queue is empty
      }
  
      // Peek at the front element of stack2
      return this.stack2[this.stack2.length - 1];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.stack1.length + this.stack2.length;
    }
  }
  
  // Example usage:
  const myQueue = new MyQueue();
  myQueue.enqueue(1);
  console.log("add 1 to que")
  myQueue.enqueue(2);
  console.log("add 2 to que")
  myQueue.enqueue(3);
  console.log("add 3 to que")
  console.log("deque operation:")
  console.log(myQueue.dequeue()); // Output: 1
  console.log("peek operation:")
  console.log(myQueue.peek());
  console.log("isEmpty operation:")    
  console.log(myQueue.isEmpty());
  console.log("size operation:")  // Output: false
  console.log(myQueue.size());    // Output: 2
  