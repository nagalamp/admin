
import { theme } from "@/theme";

export default function DriversPage() {
    return (
        <div>
            <h1
                style={{
                    fontSize: theme.FONT_SIZES.heading,
                }}
            >
                Drivers
            </h1>

            <p
                style={{
                    color: theme.COLORS.subtitle,
                    marginTop: 8,
                }}
            >
                Driver management page.
            </p>
        </div>
    );
}

