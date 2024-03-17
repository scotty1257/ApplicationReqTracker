import Graph from "graphology";
import LeaderLine from "leader-line-new";

const graph = new Graph();
const AddNode = function (content: any, parent: any) {
  graph.addNode(content);
  graph.addEdge(content, parent);
};

const GetNumNodes = function () {
  return graph.order;
};

const GetNumEdges = function () {
  return graph.size;
};

const PrintAllNodes = function () {
  graph.forEachNode((node) => {
    console.log(node);
  });
};

// Assuming 0 is parnet of node and 1 is child of ndoe "edge"
const GetParentOfNode = function (node: any) {
  return graph.source(node.extremities[0]);
};

const GetChildOfNode = function (node: any) {
  return graph.source(node.extremities[1]);
};

const DrawLeaders = function () {
  graph.forEachNode((node: any) => {
    let conects = graph.source(node.extremities);
    let parent = conects[0];
    let child = conects[1];
    let leader = new LeaderLine(parent, child, {
      color: "CornflowerBlue",
      size: 2,
    });
  });
};

// Adding some nodes
graph.addNode("John");
graph.addNode("Martha");

// Adding an edge
graph.addEdge("John", "Martha");

// Displaying useful information about your graph
console.log("Number of nodes", graph.order);
console.log("Number of edges", graph.size);

// Iterating over nodes
graph.forEachNode((node) => {
  console.log(node);
});

