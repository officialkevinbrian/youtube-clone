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

export enum VIDEO_TYPE {
  SHORT = "short",
  VIDEO = "video",
}
