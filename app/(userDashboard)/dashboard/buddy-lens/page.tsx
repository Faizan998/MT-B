"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import MyRequests from "@/components/buddy-lens/MyRequests";
import AvailableRequest from "@/components/buddy-lens/AvailableRequest";
import MyClaims from "@/components/buddy-lens/MyClaims";
import PageLoader from "@/components/PageLoader";

export default function BuddyLensDashboard() {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [tabValue, setTabValue] = useState<
    "my-requests" | "available request" | "reviewed" | "my-claims"
  >("my-requests");

  if (!userId) {
    return <PageLoader />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="rounded-2xl shadow-lg p-6 space-y-6">
        {/* <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">Buddy Lens</h2>
          <NotificationBell />
        </div> */}
        <Tabs
          value={tabValue}
          onValueChange={(value) =>
            setTabValue(
              value as
                | "my-requests"
                | "available request"
                | "reviewed"
                | "my-claims"
            )
          }
          className="w-full"
        >
          <TabsList className="mb-4  grid w-full grid-cols-3">
            <TabsTrigger value="my-requests">My Requests</TabsTrigger>
            <TabsTrigger value="my-claims">My Claims</TabsTrigger>
            <TabsTrigger value="available request">
              Available Request
            </TabsTrigger>
          </TabsList>
          <TabsContent value="my-requests">
            <MyRequests userId={userId} />
          </TabsContent>
          <TabsContent value="my-claims">
            <MyClaims userId={userId} />
          </TabsContent>
          <TabsContent value="available request">
            <AvailableRequest userId={userId} />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
