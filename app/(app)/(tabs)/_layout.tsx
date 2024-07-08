import { router, Tabs } from "expo-router";
import React, { useEffect } from "react";

import UploadIcon from "@/assets/icons/Add.svg";
import HomeIcon from "@/assets/icons/Home.svg";
import LibraryIcon from "@/assets/icons/library.svg";
import ShortIcon from "@/assets/icons/Short.svg";
import SubscriptionIcon from "@/assets/icons/Subscriptions.svg";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      {navTabs.map((navItem) => (
        <Tabs.Screen
          key={navItem.id}
          name={navItem.name}
          options={{
            title: navItem.title,

            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon Icon={navItem.icon} width={30} height={30} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

export const navTabs = [
  {
    id: 1,
    icon: HomeIcon,
    name: "index",
    title: "Home",
  },
  {
    id: 2,
    icon: ShortIcon,
    name: "shorts",
    title: "Shorts",
  },
  {
    id: 3,
    icon: UploadIcon,
    name: "upload",
    title: "Explore",
  },
  {
    id: 5,
    icon: SubscriptionIcon,
    name: "subscriptions",
    title: "Subscription",
  },
  {
    id: 4,
    icon: LibraryIcon,
    name: "library",
    title: "Library",
  },
];
