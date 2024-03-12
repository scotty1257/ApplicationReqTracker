
class GraphNode {
  value: any;
  neighbors: GraphNode[];

  constructor(value: any) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(node: GraphNode) {
    this.neighbors.push(node);
  }
}


class Graph {
  nodes: GraphNode[];

  constructor() {
    this.nodes = [];
  }

  addNode(value: any) {
    const node = new GraphNode(value);
    this.nodes.push(node);
  }

  addEdge(source: GraphNode, destination: GraphNode) {
    source.addNeighbor(destination);
    destination.addNeighbor(source);
  }
}

const findShortestPathToNode = function(start: GraphNode, target: GraphNode) : GraphNode[] {
  const visited: Set<GraphNode> = new Set();
  const queue: [GraphNode, GraphNode[]][] = [];

  queue.push([start, [start]]);

  while (queue.length > 0) {
    const [currentNode, currentPath] = queue.shift()!;

    if (currentNode === target) {
      return currentPath;
    }

    visited.add(currentNode);
    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, [...currentPath, neighbor]]);
      }
    }
  }
  return [];
}

class BasicNode {
  children: BasicNode[];
  parents: BasicNode[];
  siblings: BasicNode[];

  /*
   
      Basic Tree Visualization
            Parent (Root)
         _________|________
        /         |        \
     Sibling      Me      Sibling 
             _____|______    
            /     |      \
        Child   Child   Child
         ...     ...      ...

   */
}


class BasicTree {
  root: GraphNode;
  constructor(root: GraphNode) {
    this.root = root;
  }


}

const DrawNodeLeader(parent: BasicNode, child: BasicNode) {
  if (parent != null && child != null) {
    let leader = new LeaderLine(parent, child, {color: 'CornflowerBlue', size: 2});
  }
}

const DrawGraphLeaders = function (root: BasicNode, allLeaders?: boolean) : boolean {


  // Traverse the Graph
  //
  // Give leader to child from parents
  //
  let currentChilden = root.children;
  let currentParents = [root];

  for (let parent : parents) {
    for (let child : children) {
    DrawNodeLeader(child, parent);
    }
  } 






  while (currentChildren.length != 0) {
    for (const child : currentChildren) {
      DrawNodeLeader(currentParent, child);
    }
    currentParent
  }
}



