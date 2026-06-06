"use client";

import {
    MapPinned,
    TrafficCone,
} from "lucide-react";

export default function LiveTrafficPage() {
    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-500 p-3 rounded-xl text-white">
                    <TrafficCone size={24} />
                </div>

                <div>
                    <h1 className="text-3xl font-bold">
                        Live Traffic
                    </h1>

                    <p className="text-gray-500">
                        Monitor real-time traffic conditions
                    </p>
                </div>
            </div>

            {/* Map Container */}
            <div className="bg-white rounded-2xl border overflow-hidden">
                <div className="h-[700px] flex flex-col items-center justify-center bg-gray-50">
                    <MapPinned
                        size={80}
                        className="text-gray-300 mb-4"
                    />

                    <h2 className="text-2xl font-semibold mb-2">
                        Live Traffic Map
                    </h2>

                    <p className="text-gray-500 text-center max-w-lg">
                        Google Maps traffic layer will be
                        displayed here showing live traffic,
                        congestion, accidents, road closures,
                        and route conditions.
                    </p>
                </div>
            </div>
        </div>
    );
}