test('Topology layNodes function', function () {
    var Topology = Venus.Topology,
        layNodes = Topology.layNodes,
        cacheData = Topology.cacheData,
        layEdges = Topology.layEdges,
        maxCount = 20,
        nodeCount = Math.ceil(Math.random() * maxCount), //1 -20
        startNode = parseInt(Math.random() * nodeCount), // 0- (nodeCount-1)
        rest = [],
        data = {},
        realData = [],
        current = [startNode],
        _current = [],
        layers = [],
        edges = [],
        html = [];

    for (var i = 0; i < nodeCount; i++) {
        rest.push(i);
        data[i] = {
            text:i,
            id:i,
            parents:[],
            status:Math.ceil(Math.random() * 3),
            children:[]
        }
    }
    //delete startNode from rest array
    rest.splice(startNode, 1);
    realData.push(data[startNode])
    layers.push([data[startNode]]);
    html.push([startNode]);


    function randomParents(item, number, layerId) {
        var max = rest.length;
        var parentCount = Math.ceil(Math.random() * max)
        if (max == 0)return;
        var layer = [],
            h = [],
            e = []
        for (var i = 0; i < parentCount; i++) {
            var index = parseInt(Math.random() * rest.length),
                value = rest[index]
            realData.push(data[value])
            layer.push(data[value]);
            _current.push(value)
            data[value].children.push(number);
            e.push({
                node1:data[value],
                node2:item,
                to:data[value],
                from:item
            })
            h.push(value)
            item.parents.push(value);
            rest.splice(index, 1);
        }
        layers[layerId] || (layers[layerId] = []);
        layers[layerId] = layers[layerId].concat(layer);
        html[layerId] || (html[layerId] = []);
        html[layerId] = html[layerId].concat(h);
        edges[layerId - 1] || (edges[layerId - 1] = []);
        edges[layerId - 1] = edges[layerId - 1].concat(e);
    }

    while (rest.length) {
        var layerId = layers.length
        _current = [];
        current.forEach(function (n) {
            randomParents(data[n], n, layerId)
        });
        current = _current;
    }
    html = html.reverse();
    edges = edges.reverse();
    html.forEach(function (h, i) {
        html[i] = h.join(',') + '<br/>';
    });

    layers = layers.reverse();
    document.getElementById('show_nodes').innerHTML = html.join('')

    var chart = new Topology(document.getElementById('chart'), realData, {
        topology:{

        }
    })

    // DEPRECATED: no following methods any more
    deepEqual(chart._topology.allNodes, data, 'data cache equals data');
    deepEqual(chart._topology.layers, layers, 'total ' + nodeCount + " first is " + startNode);
    deepEqual(chart._topology.edges, edges)
});