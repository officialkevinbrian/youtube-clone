export type VideoInterface = {
  banner_img: string;
  duration: string;
  video_title: string;
  views: string;
  published_at: string;
  channel: {
    profile_picture: string;
    name: string;
  };
};

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  channelId: string;
  channelname: string;
  publishDate: Date;
  duration: number; // em segundos
  views: number;
  likes: number;
  dislikes: number;
  comments: number;
  tags: string[];
  thumbnailurl: string;
  videourl: string;
  isLive: boolean;
}

export interface YouTubeShort {
  id: string;
  title: string;
  description: string;
  channelId: string;
  channelname: string;
  publishDate: Date;
  duration: number; // em segundos, geralmente menos de 60
  views: number;
  likes: number;
  dislikes: number;
  comments: number;
  tags: string[];
  thumbnailurl: string;
  videourl: string;
}
