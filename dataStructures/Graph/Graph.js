/**
 * we are building an undirected graph
 */
class Graph {
    constructor () {
        this.adjacencyList = {}
    }

    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    removeVertex (vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    addEdge (vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge (vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    /**
     * depth first traversal using recursion
     * @param vertex - a vertex from which to start the traversal
     */
    DFSrecursive (vertex) {

        const endResult = [];
        const visitedVertices = {};

        const DFS = (vertex) => {

            if (this.adjacencyList[vertex].length === 0) return null;
            endResult.push(vertex);
            visitedVertices[vertex] = true;

        };


        // if vertex is empty
        //     return the base case
        // add vertex to results list
        // mark vertex as visited
        // for each neighbour un vertex's neighbours:
        //     if neighbour is not visited:
        //         recursively call DFS on neighbour
    }
}

const graph = new Graph();
console.log(graph.addVertex('Tokyo'));
console.log(graph.addVertex('Dallas'));
console.log(graph.addVertex('Aspen'));
console.log(graph.addVertex('LA'));
console.log(graph.addEdge('Tokyo', 'Dallas'));
console.log(graph.addEdge('Dallas', 'Aspen'));
console.log(graph.addEdge('Tokyo', 'Aspen'));
console.log(graph.addEdge('Tokyo', 'LA'));
console.log(graph.removeVertex('Tokyo'));
console.log(graph.adjacencyList);