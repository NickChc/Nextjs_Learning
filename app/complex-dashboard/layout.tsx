import { PropsWithChildren } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userAnalytics: React.ReactNode;
  revenueMetrics: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}

export default async function DashboardLayout({
  children,
  userAnalytics,
  revenueMetrics,
  notifications,
  login,
}: DashboardLayoutProps) {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="w-full flex flex-row ">
        <div className="w-[50%] flex flex-col items-center ">
          {userAnalytics}
          {revenueMetrics}
        </div>
        {notifications}
      </div>
    </div>
  ) : (
    login
  );
}
