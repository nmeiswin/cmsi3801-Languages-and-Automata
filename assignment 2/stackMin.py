class Stack:
    def __init__(self):
        self.items = []
        self.minIndex = None

    def push(self, item):
        self.items.append(item)
        if self.minIndex == None:
            self.minIndex = 0
        self.minIndex = len(self.items)-1 if item < self.items[self.minIndex] else self.minIndex  

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        else:
            raise IndexError("Stack is empty")
        
    def is_empty(self):
        return len(self.items) == 0
    def min(self):
        if not self.is_empty():
            return self.items[self.minIndex]
        else:
            raise IndexError("Stack is empty")
        

s = Stack()
s.push(10)
s.push(20)
print(s.min())
s.push(21)
s.push(19)
s.push(9)
s.push(15)
print(s.min())
