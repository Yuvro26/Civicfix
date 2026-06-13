import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FileText, Search, Users, BarChart3 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/home")({
  component: Home,
});

function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);

        useEffect(() => {
            const isLoggedIn = localStorage.getItem("isLoggedIn");

            if (!isLoggedIn) {
            navigate({ to: "/login" });
            }
        }, [navigate]);

  
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10">

        <div className="text-center">
         <h1 className="text-5xl font-bold">
            Welcome, {userName || "Citizen"} 👋
            </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Report, Track and Improve your city together.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <Link to="/report">
            <div className="glass-card rounded-2xl p-6 text-center">
              <FileText className="mx-auto h-10 w-10" />
              <h3 className="mt-3 font-semibold">Report Issue</h3>
            </div>
          </Link>

          <Link to="/track">
            <div className="glass-card rounded-2xl p-6 text-center">
              <Search className="mx-auto h-10 w-10" />
              <h3 className="mt-3 font-semibold">Track Complaints</h3>
            </div>
          </Link>

          <Link to="/community">
            <div className="glass-card rounded-2xl p-6 text-center">
              <Users className="mx-auto h-10 w-10" />
              <h3 className="mt-3 font-semibold">Community</h3>
            </div>
          </Link>

          <Link to="/dashboard">
            <div className="glass-card rounded-2xl p-6 text-center">
              <BarChart3 className="mx-auto h-10 w-10" />
              <h3 className="mt-3 font-semibold">Dashboard</h3>
            </div>
          </Link>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-3xl font-bold">18,000+</h2>
            <p className="text-muted-foreground">Issues Reported</p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-3xl font-bold">15,200+</h2>
            <p className="text-muted-foreground">Issues Resolved</p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-3xl font-bold">96%</h2>
            <p className="text-muted-foreground">Resolution Rate</p>
          </div>

        </div>

      </div>
    </SiteLayout>
  );
}