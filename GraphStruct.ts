import * as LeaderLine from "leader-line-new";

/*   Basic Tree Visualization
          Parent (Root)
        _________|________
      /         |        \
    Sibling      Me      Sibling
            _____|______
          /     |      \
      Child   Child   Child
        ...     ...      ...   */

class BasicNode {
    children: BasicNode[] = [];
    parents: BasicNode[] = [];
    siblings: BasicNode[] = [];
    id: number = 0;
    owner: BasicTree;
    content: any = {};
    GetID(): number {
        if (this.id !== undefined) 
          return this.id;
        
        let list = this.owner.nodeIdList;
        let listLen = this.owner.nodeIdList.length - 1;
        return list[listLen];
    }

    GenerateID(): void {
        let idList = this.owner.nodeIdList;
        let idListLen = idList.length-1;

        idList.push(idList[idListLen] + 1);
    }

    AddChild(childNode: BasicNode, parentNode: BasicNode) {
        this.children.push(childNode);
        childNode.GenerateID();

        return childNode;
    }
}

class BasicTree {
    root: BasicNode;
    nodeIdList: number[];
    constructor(root: BasicNode) {
        this.root = root;
        this.nodeIdList = [];
    }
    AddNode(content: any) {
        let container = document.getElementsByClassName('body-container')[0];
        let cNode = document.createElement('div');
        cNode.append(content);
        cNode.classList.add('container')
        container.append(cNode);

        let treeNode = new BasicNode();

        treeNode.owner = this;
        treeNode.GenerateID();
        cNode.classList.add('element' + treeNode.GetID());
    }

  // PrintTree() {
  //   let currentParents: BasicNode[] = [this.root];
  //   let currentChildren: BasicNode[] = currentParents[0].children;
  //
  //   for (let parent of currentParents) {
  //     console.log(parent.id);
  //     for (let child of currentChildren) {
  //       console.log("    "+child.id);
  //     }
  //     currentParents = 
  //   }
  //
  // }
  //
  TraverseRecursive(currentNode: BasicNode) {
    console.log(currentNode.GetID())

    for (let child in currentNode.children) {
      this.TraverseRecursive(currentNode.children[child]);
    }
  }

  Traverse(rootNode: BasicNode) {
    this.TraverseRecursive(rootNode);
  }
};

const DrawNodeLeader = function (parent: BasicNode, child: BasicNode) {
    if (parent != null && child != null) {
        let leader = new LeaderLine(parent, child, {
            color: "CornflowerBlue",
            size: 2,
        });
    }
};

const DrawGraphLeaders = function (root: BasicNode): boolean {
    let currentChildren = root.children;
    let currentParents = [root];

    for (let parent of currentParents) {
        for (let child of currentChildren) {
            DrawNodeLeader(parent, child);
        }
    }
    return true;
};

let Main = function() {
    let root = new BasicNode();
    let tree = new BasicTree(root);
    let tempNode = document.createElement('p');
    tempNode.innerHTML = `<p>Hey There</p>`;
    tree.AddNode(tempNode);
    root.owner = tree;



    // tree.AddNode(new BasicNode());
   let child2 =  root.AddChild(new BasicNode(), root);
    let child3 = root.AddChild(new BasicNode(), root);
  tree.Traverse(root);
}






document.getElementById('addNode')?.addEventListener('click', (event: any) => {
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
