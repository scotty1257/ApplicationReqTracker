
class TreeNode {
  key: number;
  value: any;
  parent: TreeNode | boolean;
  children: TreeNode[];

  constructor(key: number, value: any, parent: TreeNode | boolean) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.children = [];
  }

  get isLeaf() : boolean {
    return this.children.length === 0;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}

class Tree {
  root: TreeNode;
  constructor(key: number, value: any) {
    this.root = new TreeNode(key, value, false);
  }

  *preOrderTraversal(node: TreeNode = this.root) : any {
    yield node;
    if (node.children.length > 0) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  *postOrderTraversal(node: TreeNode = this.root) : any {
    if (node.children.length > 0) {
      for (let child of node.children) {
        yield* this.postOrderTraversal(child);
      }
    } 
    yield node;
  }

  insert(parentNodeKey: number, key: number, value: any = key) : boolean {
    for (let node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        node.children.push(new TreeNode(key, value, node));
        return true;
      }
    }
    return false;
  }
  remove(key: number) {
    for (let node of this.postOrderTraversal()) {
      const filtered = node.children.filter(
        (c: TreeNode) => {
          c.key !== key
        }
      );
      if (filtered.length !== node.children.length) {
        node.children = filtered;
        return true;
      }
    }
    return false;
  }

  find(key: number) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === key) {
        return node;
      }    
    }
    return undefined;
  }

  print() {
    for (let node of this.postOrderTraversal()) {
      if (node.hasChildren)
        console.log("╚"+node.value)
      else 
        console.log("╠═"+node.value);
    }
  }
}

const main = function() {
  let tree = new Tree(0, "Tree");
  tree.insert(0, 1, "A");
  tree.insert(0, 2, "B");
  tree.insert(0, 3, "C");
  tree.insert(1, 4, "D");
  tree.insert(1, 5, "E");
  tree.insert(1, 6, "F");
  tree.insert(3, 7, "G");
  tree.insert(3, 8, "H");
  tree.insert(3, 9, "I");
  tree.insert(3, 10, "J");
  tree.print();
}

main();
