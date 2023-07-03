import { authOptions } from "@/helper/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = () => {
    const session = getServerSession(authOptions);
    if (!session) {
        redirect("api/auth/signin");
    }
    return <div>Dashboard</div>;
};

export default Dashboard;
