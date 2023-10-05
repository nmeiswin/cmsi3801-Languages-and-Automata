class List_Node:
    def __init__(self,data):
        self.data = data
        self.next = None

def delete_middle_node(node):
    node.data = node.next.data
    node.next = node.next.next

#Create test List

a = List_Node("a")
b = List_Node("b")
c = List_Node("c")
d = List_Node("d")
e = List_Node("e")
f = List_Node("f")

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

def Print_list(node):
    while node != None:
        print(node.data)
        node = node.next

Print_list(a)
delete_middle_node(c)
Print_list(a)
