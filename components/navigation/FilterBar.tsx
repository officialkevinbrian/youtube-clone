import ExplorerIcon from "@/assets/icons/Explore.svg";
import React from "react";
import { Button, ScrollView, View } from "tamagui";
import { TabBarIcon } from "./TabBarIcon";

const FilterListingTab = () => {
  return (
    <View py={"$2.5"}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
      >
        <Button size={"$3"} bg={"$gray6"} color={"black"}>
          <TabBarIcon width={20} Icon={ExplorerIcon} />
        </Button>
        {filterListing.map((item) => (
          <Button
            size={"$3"}
            bg={item.active ? "black" : "$gray6"}
            color={item.active ? "white" : "black"}
          >
            {item.label}
          </Button>
        ))}
      </ScrollView>
    </View>
  );
};

export default FilterListingTab;

const filterListing = [
  { id: 1, label: "All", handler: () => {}, active: true },
  { id: 2, label: "Under 10 min", handler: () => {} },
  { id: 3, label: "Music", handler: () => {} },
  { id: 4, label: "Movies", handler: () => {} },
  { id: 5, label: "Trending", handler: () => {} },
];
