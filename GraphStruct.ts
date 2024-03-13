//
// class GraphNode {
//   value: any;
//   neighbors: GraphNode[];
//
//   constructor(value: any) {
//     this.value = value;
//     this.neighbors = [];
//   }
//
//   addNeighbor(node: GraphNode) {
//     this.neighbors.push(node);
//   }
// }
//
//
// class Graph {
//   nodes: GraphNode[];
//
//   constructor() {
//     this.nodes = [];
//   }
//
//   addNode(value: any) {
//     const node = new GraphNode(value);
//     this.nodes.push(node);
//   }
//
//   addEdge(source: GraphNode, destination: GraphNode) {
//     source.addNeighbor(destination);
//     destination.addNeighbor(source);
//   }
// }
//
// const findShortestPathToNode = function(start: GraphNode, target: GraphNode) : GraphNode[] {
//   const visited: Set<GraphNode> = new Set();
//   const queue: [GraphNode, GraphNode[]][] = [];
//
//   queue.push([start, [start]]);
//
//   while (queue.length > 0) {
//     const [currentNode, currentPath] = queue.shift()!;
//
//     if (currentNode === target) {
//       return currentPath;
//     }
//
//     visited.add(currentNode);
//     for (const neighbor of currentNode.neighbors) {
//       if (!visited.has(neighbor)) {
//         queue.push([neighbor, [...currentPath, neighbor]]);
//       }
//     }
//   }
//   return [];
// }
//
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

import LeaderLine from "leader-line-new";

class BasicTree {
  root: BasicNode;
  constructor(root: BasicNode) {
    this.root = root;
  }
}

const DrawNodeLeader = function (parent: BasicNode, child: BasicNode) {
  if (parent != null && child != null) {
    let leader = new LeaderLine(parent, child, {
      color: "CornflowerBlue",
      size: 2,
    });
  }
};

const DrawGraphLeaders = function (
  root: BasicNode,
  allLeaders?: boolean,
): boolean {
  let currentChildren = root.children;
  let currentParents = [root];

  if (!allLeaders) return false;

  for (let parent of currentParents) {
    for (let child of currentChildren) {
      DrawNodeLeader(parent, child);
    }
  }
  return true;
};

const AddNewNode = function () {
  let container = document.getElementsByClassName("body-container")[0];
};

const addNode = function (
  parent: BasicNode,
  child: BasicNode,
  content: Node,
): void {
  let rootContainer = document.getElementsByClassName("body-container")[0];

  let newNode = document.createElement("div");
  if (content != null || content != undefined) {
    newNode.appendChild(content);
  }

  newNode.classList.add("container");
  // TODO: Need to create UUID for each new container node
  newNode.id = "element3";

  rootContainer.append(newNode);

  if (parent !== undefined || parent != null) {
    createLine(parent, newNode);
  }

  if (child !== undefined && child !== null) {
    createLine(newNode, child);
  }
};

const addDefaultNode = function () {
  addNode(
    document.getElementById("element2"),
    document.getElementById("element3"),
  );
};
