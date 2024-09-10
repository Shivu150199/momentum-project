import link from "../assets/link.svg";
import React from "react";
import { Handle } from "react-flow-renderer";

const CustomNode = ({ data }) => {
    console.log(data);

    return (
        <div className="border-[1px] border-orange-400 rounded-md bg-[#181e25]">
            {/* Custom Label */}
            <div className="flex items-center justify-between p-2 border-b-[1px] border-orange-400 ">
                <h3 className="text-white font-md" title={data.label}>
                    {data.label.length > 20 ? `${data.label.substring(0, 20)}...` : data.label}
                </h3>
                <img src={link} alt="Link icon" className="w-4 h-4" />
            </div>

            {/* Parameters */}
            <div className="flex items-center gap-1 text-white text-[10px] p-2">
                <span className="text-orange-400">Params</span>:
                {data.params && data.params.length > 0 ? (
                    `[${Object.keys(data.params[0]).map((item, i) => (
                        <span key={i} className="text-white mr-2">
                            {item}
                        </span>
                    ))}]`
                ) : (
                    <span className="text-gray-400 ml-2">
                        No params available
                    </span>
                )}
            </div>

            {/* Response Object */}
            <p className="text-white p-2 text-[10px]">
                <span className="text-orange-400">Response Object: </span>
                {data.response_object ? JSON.stringify(data.response_object) : "empty"}
            </p>

            {/* Input and Output Handles */}
            <Handle type="target" position="left" />
            <Handle type="source" position="right" />
        </div>
    );
};

export default CustomNode;
