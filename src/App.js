import React, { lazy, Suspense, memo } from "react";
import { ReactFlowProvider } from "react-flow-renderer";
import Sidebar from "./component/Sidebar";

const CartCampaign = lazy(() => import("./component/CartCampaign"));
const Graph = lazy(() => import("./component/Graph"));

function App() {
    return (
        <section className="w-screen h-[100vh] flex">
            <Sidebar />
            <div className="flex-1 flex-col">
                <div className="flex-[.030] flex items-center p-4 bg-[#363636] text-base font-medium text-white border-b-2">
                    <h2>Configure Flows</h2>
                </div>
                {/* Hero container */}
                <div className="flex h-[calc(100vh-58px)] flex-1">
                    <div className="flex-1 flex flex-col relative h-full justify-between">
                        <div className="h-full">
                            <ReactFlowProvider>
                                <Suspense fallback={<div>Loading Graph...</div>}>
                                    <MemoizedGraph />
                                </Suspense>
                            </ReactFlowProvider>
                        </div>
                        <div className="flex items-center p-2 px-4 text-white font-medium text-base sticky bottom-0 bg-[#363636]">
                            cart
                        </div>
                    </div>
                    <Suspense fallback={<div>Loading Cart Campaign...</div>}>
                        <MemoizedCartCampaign />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}

const MemoizedGraph = memo(Graph);
const MemoizedCartCampaign = memo(CartCampaign);

export default App;
