import React, { useEffect, useMemo, useState } from "react";
import {
    Panel,
    Position,
    ReactFlow,
    ReactFlowProvider,
    ViewportPortal,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
    Background,
    BackgroundVariant,
    Controls,
   
} from "react-flow-renderer";
import CustomNode from "./CustomNode";
import { fetchGraphData } from "../mockApi";
import { plus } from "../assets";


// Helper function to generate unique ID
const generateId = (() => {
    let id = 0;
    return () => `${++id}`;
})();

const Graph = () => {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    useEffect(() => {
        fetchGraphData().then((data) => {
            const graphNodes = [];
            const graphEdges = [];
            data.forEach((node) => {
                const transformedData = transformNodeToGraph(node, 100, 250, 1);
                graphNodes.push(...transformedData.nodes);
                graphEdges.push(...transformedData.edges);
            });
            setNodes(graphNodes);
            setEdges(graphEdges);
        });
    }, []);

    // Transform the node data to React Flow graph format
    function transformNodeToGraph(node, x = 100, y = 100, level = 0) {
        const {
            function: label,
            params,
            response_object,
            children = [],
        } = node;
        const id = generateId();
        const nodeType = `nodeType${level}`; // Set node type based on level

        // Create the current node object
        const currentNode = {
            id,
            type: nodeType,
            data: { label, params, response_object },
            position: { x, y },
        };

        // Recursively process children and assign positions
        const childNodes = [];
        const childEdges = [];

        children.forEach((child, index) => {
            const childNode = transformNodeToGraph(
                child,
                x + 400, // Shift child nodes to the right
                y + index * 250, // Stack child nodes vertically
                level + 1 // Increment the level for child nodes
            );
            childNodes.push(...childNode.nodes);
            childEdges.push(...childNode.edges);

            // Connect current node to the child node with an edge
            childEdges.push({
                id: `e${id}-${childNode.nodes[0].id}`,
                source: id,
                target: childNode.nodes[0].id,
                type: 'smoothstep' ,
                markerEnd: {
                  type: 'arrowclosed', // Use 'arrow' for an open arrow, or 'arrowclosed' for a closed arrowhead
              },
            });
        });

        return {
            nodes: [currentNode, ...childNodes],
            edges: childEdges,
        };
    }
  

    const nodeTypes = {
        nodeType0: CustomNode,
        nodeType1: CustomNode,
        nodeType2: CustomNode,
        nodeType3: CustomNode,
        nodeType4: CustomNode,
        nodeType5: CustomNode,
    };

    return (
        <div style={{ height: "100%", width: "100%" }} className="bg-[#141a20]">
            <ReactFlow
               nodes={nodes} edges={edges} nodeTypes={nodeTypes}
                className="bg-[#141a20]"
          
                // fitView
            >
                <Background
                    color="#d49256"
                    variant={BackgroundVariant.Lines}
                    gap={50}
                />
                <Controls />
                <Panel position="bottom-left">
                    <button className="px-4 py-2 bg-[orange] rounded-md text-white font-medium flex items-center gap-2">
                      <img src={plus} alt=''/>
                        Add methods
                    </button>
                </Panel>

                {/* <Handle type="target" position={Position.Left} /> */}
            </ReactFlow>
        </div>
    );
};

export default Graph;
