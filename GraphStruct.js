"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var LeaderLine = require("leader-line-new");
/*   Basic Tree Visualization
          Parent (Root)
        _________|________
      /         |        \
    Sibling      Me      Sibling
            _____|______
          /     |      \
      Child   Child   Child
        ...     ...      ...   */
var BasicNode = /** @class */ (function () {
    function BasicNode() {
        this.children = [];
        this.parents = [];
        this.siblings = [];
        this.id = 0;
        this.content = {};
    }
    BasicNode.prototype.GetID = function () {
        if (this.id !== undefined)
            return this.id;
        var list = this.owner.nodeIdList;
        var listLen = this.owner.nodeIdList.length - 1;
        return list[listLen];
    };
    BasicNode.prototype.GenerateID = function () {
        var idList = this.owner.nodeIdList;
        var idListLen = idList.length - 1;
        idList.push(idList[idListLen] + 1);
    };
    return BasicNode;
}());
var BasicTree = /** @class */ (function () {
    function BasicTree(root) {
        this.root = root;
        this.nodeIdList = [];
    }
    BasicTree.prototype.AddNode = function (content) {
        var container = document.getElementsByClassName('body-container')[0];
        var cNode = document.createElement('div');
        cNode.append(content);
        container.append(cNode);
        var treeNode = new BasicNode();
        treeNode.owner = this;
        treeNode.GenerateID();
        cNode.classList.add('element' + treeNode.GetID());
    };
    return BasicTree;
}());
;
var DrawNodeLeader = function (parent, child) {
    if (parent != null && child != null) {
        var leader = new LeaderLine(parent, child, {
            color: "CornflowerBlue",
            size: 2,
        });
    }
};
var DrawGraphLeaders = function (root) {
    var currentChildren = root.children;
    var currentParents = [root];
    for (var _i = 0, currentParents_1 = currentParents; _i < currentParents_1.length; _i++) {
        var parent_1 = currentParents_1[_i];
        for (var _a = 0, currentChildren_1 = currentChildren; _a < currentChildren_1.length; _a++) {
            var child = currentChildren_1[_a];
            DrawNodeLeader(parent_1, child);
        }
    }
    return true;
};
var Main = function () {
    var root = new BasicNode();
    var tree = new BasicTree(root);
    var tempNode = {};
    tree.AddNode(tempNode);
};
(_a = document.getElementById('addNode')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    Main();
});
// const addNode = function (
//   parent: BasicNode,
//   child: BasicNode,
//   content: Node,
// ): void {
//   let rootContainer = document.getElementsByClassName("body-container")[0];
//
//   let newNode = document.createElement("div");
//   if (content != null || content != undefined) {
//     newNode.appendChild(content);
//   }
//
//   newNode.classList.add("container");
//   // TODO: Need to create UUID for each new container node
//   newNode.id = "element3";
//
//   rootContainer.append(newNode);
//
//   if (parent !== undefined || parent != null) {
//     createLine(parent, newNode);
//   }
//
//   if (child !== undefined && child !== null) {
//     createLine(newNode, child);
//   }
// };
//
// const addDefaultNode = function () {
//   addNode(
//     document.getElementById("element2"),
//     document.getElementById("element3"),
//   );
// };
