let count = 0;

function nodeCounter(node) {
    let children = node.children;
    if (!children || !children.length) count++;
    for (let i = 0; i < children.length; i++) {
        nodeCounter(children[i]);
    }
}

nodeCounter(document.getElementById('bod'));
console.log(count);