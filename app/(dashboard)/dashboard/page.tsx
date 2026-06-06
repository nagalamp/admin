
import { theme } from "@/theme";

export default function DashboardPage() {
    return (
        <div>
            <h1
                style={{
                    fontSize: theme.FONT_SIZES.heading,
                }}
            >
                Dashboard
            </h1>

            <p
                style={{
                    color: theme.COLORS.subtitle,
                    marginTop: 8,
                }}
            >
                Welcome to dashboard.
            </p>
        </div>
    );
}

