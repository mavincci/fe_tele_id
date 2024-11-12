import {
  Home,
  LogOut,
  Globe,
  CircleUser,
  KeyRound,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@radix-ui/react-label";

const items = [
  {
    title: "Personal Information",
    url: "/dashboard/personalInformation",
    icon: CircleUser,
  },
  {
    title: "Address Information",
    url: "/dashboard/addressInformation",
    icon: Home,
  },
  {
    title: "Languages",
    url: "/dashboard/languages",
    icon: Globe,
  },
  {
    title: "Change password",
    url: "/dashboard/changePassword",
    icon: KeyRound,
  },
  {
    title: "Advanced settings",
    url: "/dashboard/advancedSettings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://placehold.co/400x400" />
            <AvatarFallback>Admin</AvatarFallback>
          </Avatar>

          <Label className="font-bold text-xl">Admin</Label>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="py-2">
                  <SidebarMenuButton asChild>
                    <Button
                      variant={"ghost"}
                      className="justify-start space-x-2"
                      asChild
                    >
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenuButton asChild>
          <Button variant={"destructive"} asChild>
            <a href={"/signout"}>
              <LogOut />
              <span>Sign-out</span>
            </a>
          </Button>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
