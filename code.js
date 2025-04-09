function depthFirstSearch(graph, startNode, targetNode) {
    var checked = [];
    var que = [];

    function search(graph, startNode, targetNode, checked, que){
        var returnvalue = false;
    
        if (startNode == targetNode){
            return true;
        }
        if (!graph[startNode] || graph.length < 1) {
            return false;
        }
    
        var lengthh = (graph[startNode].length)
    
        for (let i = 0; i < lengthh; i++){
            var newnode = graph[startNode][i];
            if (!(checked.includes(i)) && newnode != 0){
                checked.push(i);
                returnvalue = search(graph, i, targetNode, checked, que);
            }
            
            if (returnvalue == true){
                que.push(i);
                return true;
            }
        }
    
        return false;
    }

    checked.push(startNode);
    var found = search(graph, startNode, targetNode, checked, que);
    if (found && (graph.length > 0)) {
        que.push(startNode);
        que.reverse();
    }

    return que;
}

function augmentingPath(graph, start, end) {
    const adjMatrix = [];
    const keys = Object.keys(graph);
    var lengthoflist = Object.keys(graph).length;

    //initialize a fully empty matrix of length of the adjList
    //for each row: (same number in both list and matrix)
    for (let i = 0; i < lengthoflist; i++) {
        adjMatrix[i] = [];
        //for each cell in the column set it to zero as a default value
        for (let j = 0; j < lengthoflist; j++) {
            adjMatrix[i][j] = 0;
        }
    }
    
    //for each verticie in the adj list
    for (let node in graph) {
        let neighbors = graph[node];
        var i = keys.indexOf(node);
        //for each edge the vertice has
        for (let neighbor in neighbors) {
            var j = keys.indexOf(neighbor);
            adjMatrix[i][j] = graph[node][neighbor];
        }
    }

    //actually find the path.
    var answer = depthFirstSearch(adjMatrix, keys.indexOf(start), keys.indexOf(end));

    //return the values from numbers to items
    for (var i = 0; i < answer.length; i++){
        answer[i] = keys[answer[i]]
    }

    return answer;
}