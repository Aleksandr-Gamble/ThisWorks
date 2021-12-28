
// placing 'export' before a thing is like marking it public
export function addNode(Graph, node) {
    // add a node to the pretty glowing graph
    const { nodes, links } = Graph.graphData();
    Graph.graphData({
        nodes: [...nodes, node ],
        links: links
      });
}