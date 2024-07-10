import DownloadBtnIcon from "@/assets/icons/Download.svg";
import LikeBtnIcon from "@/assets/icons/Like.svg";
import ShareBtnIcon from "@/assets/icons/Share.svg";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import SpinnerLoader from "@/components/ui/loader";
import RecommendVideosList from "@/components/ui/recommend.list";
import ScrollableWrapper from "@/components/wrappers/scrollable-wrapper";
import { useFetchSelect } from "@/hooks/useFetch";
import { YouTubeVideo } from "@/type/video.type";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { Stack, useLocalSearchParams } from "expo-router";
import * as React from "react";
import { useWindowDimensions } from "react-native";
import { Avatar, Button, Text, View, XStack, YStack } from "tamagui";

export default function WatchScreen() {
  const { v, id } = useLocalSearchParams() as any;

  const videoRef = React.useRef(null);
  const [status, setStatus] = React.useState<AVPlaybackStatus | {}>({});

  const widthScreen = useWindowDimensions().width;
  const heightScreen = useWindowDimensions().height;

  if (!id) return null;

  //fetch current video
  const { loading, data: videoItem, error } = useFetchSelect("videos", id);

  if (loading) return <SpinnerLoader />;

  if (!videoItem) return <SpinnerLoader />;

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View flex={1} gap={"$2.5"}>
        <XStack onPress={() => {}}>
          <Video
            ref={videoRef}
            style={{
              borderWidth: 0,
              width: widthScreen,
              height: (heightScreen / 100) * 35,
              alignSelf: "center",
              flex: 1,
            }}
            source={{
              uri: videoItem?.videourl ?? "",
            }}
            useNativeControls={true}
            resizeMode={ResizeMode.COVER}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />

          {/* <PlayBackWrapper videoStatus={status} videoRef={videoRef}>
            <PlaybackTopBtn />
            {status?.isBuffering ? (
              <ActivityIndicator />
            ) : (
              <PlaybackMiddleButtons videoRef={videoRef} videoStatus={status} />
            )}
            <XStack p={"$3"} justifyContent="space-between">
              <Text color={"white"}>0:07 / 47:25</Text>
              <TabBarIcon Icon={FullScreenIcon} width={20} />
            </XStack>
          </PlayBackWrapper> */}
        </XStack>

        <YStack px={"$4"}>
          <Text fontWeight={"bold"}>{videoItem?.title}</Text>
          <XStack>
            <Text fontWeight={"$1"} color={"$gray9"} numberOfLines={1}>
              {`${videoItem?.views} views `} 3 days ago {videoItem?.description}
            </Text>
          </XStack>
        </YStack>

        <ScrollableWrapper>
          <YStack px={"$4"} gap={"$2.5"}>
            <ChannelPreview video={videoItem} />
            <AddonButtons />
            <PreviewComments />
          </YStack>
          <RecommendVideosList />
        </ScrollableWrapper>
      </View>
    </>
  );
}

const AddonButtons = () => {
  const addonButtonsListing = [
    { icon: LikeBtnIcon, value: "652", id: 1, handler: () => {} },
    { icon: ShareBtnIcon, label: "Share", id: 2, handler: () => {} },
    { icon: DownloadBtnIcon, label: "Download", id: 3, handler: () => {} },
  ];

  return (
    <XStack justifyContent="space-between">
      {addonButtonsListing.map((addon) => (
        <Button borderRadius={"$12"} size={"$3"} key={addon.id} bg={"$gray6"}>
          <TabBarIcon Icon={addon.icon} width={20} />
          <Text fontWeight={"bold"}>{addon?.label ?? addon.value}</Text>
        </Button>
      ))}
    </XStack>
  );
};

const PreviewComments = () => {
  return (
    <View gap={"$2"} padding={"$2"} borderRadius={"$3"} bg={"$gray6"}>
      <XStack alignItems="center" gap={"$2"}>
        <Text fontWeight={"bold"}>Comments</Text>
        <Text color={"$gray10"} fontSize={"$1"}>
          18
        </Text>
      </XStack>
      <XStack gap={"$2"} overflow="hidden">
        <Avatar circular size="$3">
          <Avatar.Image
            accessibilityLabel="Nate Wienert"
            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
          />
          <Avatar.Fallback delayMs={600} backgroundColor="black" />
        </Avatar>
        <Text
          fontSize={"$1"}
          lineBreakMode="head"
          color={"$gray10"}
          textBreakStrategy="balanced"
        >
          Will AI Replace this Ui Ux Designers Skills and Jobs if they take What
          The Purpose of Learning New Skills
        </Text>
      </XStack>
    </View>
  );
};

const ChannelPreview = ({ video }: { video: YouTubeVideo }) => {
  return (
    <YStack gap={"$3"}>
      <XStack alignItems="center" gap={"$2"}>
        <Avatar circular size="$3">
          <Avatar.Image
            accessibilityLabel="Nate Wienert"
            src={video?.thumbnailurl}
          />
          <Avatar.Fallback delayMs={600} backgroundColor="black" />
        </Avatar>
        <Text fontWeight={"bold"}>
          {video?.channelname} <Text>62.4K</Text>
        </Text>
      </XStack>
    </YStack>
  );
};
