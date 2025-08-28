import Card from "@/component/Card";
import Link from "next/link";
import React from "react";

export default function Notifications() {
  return (
    <div>
      <Card>
        <div>Notifications</div>
        <div>
          <Link href="/complex-dashboard/archived">Archived</Link>
        </div>
      </Card>
    </div>
  );
}
