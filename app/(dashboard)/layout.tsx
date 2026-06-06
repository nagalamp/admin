
import Sidebar from "@/components/Sidebar";
import { theme } from "@/theme";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main
                className="flex-1 p-6"
                style={{
                    backgroundColor: theme.COLORS.background,
                }}
            >
                {children}
            </main>
        </div>
    );
}

