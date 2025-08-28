import Card from "@/component/Card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <div>
      <Card>
        <div>Archived Notification</div>
        <div>
          <Link href="/complex-dashboard">Default</Link>
        </div>
      </Card>
    </div>
  );
};

export default ArchivedNotifications;
