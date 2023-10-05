class List_Node:
    def __init__(self,data):
        self.data = data
        self.next = None

def add_list(nodeA,nodeB):
    mult = 1
    sum = 0
    while nodeA != None or nodeB != None:
        a = nodeA.data if nodeA != None else 0
        b = nodeB.data if nodeB != None else 0
        sum += (a + b) * mult
        mult = mult * 10
        nodeA = nodeA.next if nodeA != None else None
        nodeB = nodeB.next if nodeB != None else None
    return sum

a1 = List_Node(3)
a2 = List_Node(2)
a3 = List_Node(1)
a4 = List_Node(1)

a1.next = a2
a2.next = a3
a3.next = a4

b1 = List_Node(3)
b2 = List_Node(2)
b3 = List_Node(1)
b4 = List_Node(2)
b5 = List_Node(9)

b1.next = b2
b2.next = b3
b3.next = b4
b4.next = b5

print(add_list(a1,b1))
