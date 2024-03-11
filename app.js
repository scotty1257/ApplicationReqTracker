var el1 = document.getElementById('element1');
var el2 = document.getElementById('element2');
var leader = new LeaderLine(el1, el2, {color: 'CornflowerBlue', size: 3});


const createLine = function(element1, element2, color, size) {
  return new LeaderLine(element1, element2, color, size)
}

const addNode = function(parent, child, content) {
  let rootContainer = document.getElementsByClassName('body-container')[0];

  let newNode = document.createElement("div");
  if (content != null || content != undefined) {
    newNode.appendChild(content);
  }

  newNode.classList.add("container");
  newNode.id = "element3";

  rootContainer.append(newNode);

  if (parent !== undefined || parent != null) {
    createLine(parent, newNode);
  }

  if (child !== undefined && child !== null) {
    createLine(newNode, child);
  }
}

const addDefaultNode = function() {
  addNode(document.getElementById("element2"), document.getElementById('element3'));
}
