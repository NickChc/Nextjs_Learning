import { Card } from "@/components/Card";
import Link from "next/link";

export default async function Notifications() {
  return (
    <Card>
      <h1>NOTIFICATIONS</h1>
      <Link href={"/complex-dashboard/archived"}>Archived</Link>
    </Card>
  );
}
