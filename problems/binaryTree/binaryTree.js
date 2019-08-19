class TreeNode {
    constructor(val) {
        this.val = val;
        this.children = []
    }
    appendChild(node) {
        return this.children.push(node);
    }
}

var root = new TreeNode(0);
root.appendChild(new TreeNode(100));
root.appendChild(new TreeNode(200));

root.children[0].appendChild(new TreeNode(1));
root.children[0].children[0].appendChild(new TreeNode(2));
root.children[0].children[0].children[0].appendChild(new TreeNode(3));


function recursivelyPlant (elem, levels) {

    let drillDown = root.children[0] ? root.children[0] : null;
    if (levels < 1) { return new TreeNode(1)}

    return drillDown.appendChild(recursivelyPlant(drillDown, levels - 1));
}

let tree = recursivelyPlant(new TreeNode(1000), 4);

console.log(root);
console.log(tree);