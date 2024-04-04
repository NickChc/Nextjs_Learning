import { Card } from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <h1>ARCHIVED NOTIFICATIONS</h1>
      <Link href={"/complex-dashboard"}>Default</Link>
    </Card>
  );
}
