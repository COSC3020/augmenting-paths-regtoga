# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

I didnt want to rewrite the depthfirstsearch function so i copied it from a past assignment:

step 1: convert adjList to adjMatrix

Runtime for converting to adj matrix this one is def |v|^2 because reguardless of the input it needs to run over the sides the the matrix and the height of the matrix to initialize them all to zero. it would look something like this: |v| * (|v| + e) where e is the number of edges in the list and |v| is the number of nodes in the graph, is the runtime. Since the number of edges in this case cannot be bigger than the number of nodes, asymptoptically we can ignore the nodes to get just |v| * |v| $ \in O(|v|^2)$,
This one also only depends on the verticies.

step 2: use depthFirstSearch to find a path

My code only has one loop in it and this loop iterates though each connection to the starting node. worst case the node could be connected to every other node including itself so this loop runs |v| times. 
Inside the loop i have a checked array that stores all the nodes i have checked already, this line has a complexity of |v| because in the worste case it might have to check every item in the list to see if the list includes the item or not.
Then in the loop i also have it calling the search function again. the maximum number of times this function can be called is n times as if the graph looks like alinked list we would have to traverse every node to get to the desired one at the end.
so our recurrence relation looks like f(|v|) = |v| * (|v| + f(|v|-1)) $\in \theta(|v|^2)$

step3: convert result back to keys of the adjList
This loop runs the length of the answer list, so no more than the number of verticies in the graph. |v|

so alltogether |v|^2 + |v|^2 + |v| $\in \Theta(|v|^2)$


What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.
