// @ts-nocheck
// graph

const airports = 'a b c d'.split(' ');
const routes = [
  ['a', 'b'],
  ['a', 'c'],
  ['c', 'd'],
];

const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));


function bfs(start, final) {
  const visited = new Set();
  const queue = [start];
  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);
    for (const destination of destinations) {
      if (destination === final) {
        console.log('Found it!');
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }

  };
};


function dfs(start, final, visited = new Set()) {
  console.log(start);
  visited.add(start);

  const destinations = adjacencyList.get(start);
  for(const destination of destinations) {
    if (destination === final) {
      console.log('DFS found in steps', visited.size);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, final, visited);
    }
  }
}

console.clear();
console.log(adjacencyList);
bfs('a', 'd');
dfs('a', 'd');
