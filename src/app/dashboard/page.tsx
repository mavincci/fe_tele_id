"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Basic");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <Card className="p-4 md:p-6 shadow-md bg-white">
          <CardContent className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Fields */}
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  type="text"
                  placeholder="Enter your middle name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="mt-1"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-1"
                />
              </div>

              {/* Password Field */}
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1"
                />
              </div>
            </div>

            <Button className="mt-4">Save Changes</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
