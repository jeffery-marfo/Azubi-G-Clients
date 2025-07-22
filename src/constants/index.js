import { FileText, GraduationCap, LayoutDashboard, Users } from "lucide-react";

const K = {
    SIDEBAR_LINKS: [
        {
            key: "dashboard",
            label: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard
        },
        {
            key: "invoices",
            label: "Invoices",
            path: "/invoices",
            icon: FileText
        },
        {
            key: "learners",
            label: "Learners",
            path: "/learners",
            icon: Users,
        },
        {
            key: "tracks",
            label: "Tracks",
            path: "/tracks",
            icon: GraduationCap,
        },
        {
            key: "courses",
            label: "Courses",
            path: "/courses",
            icon: GraduationCap,
        },
        {
            key: "report",
            label: "Report",
            path: "/report",
            icon: LayoutDashboard
        }
    ]
}

export default K;
