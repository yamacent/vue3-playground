import axios, { AxiosResponse } from "axios";

export interface Story {
  type: "story";
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  url: string;
}

export interface Comment {
  type: "comment";
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
}

export interface User {
  about: string;
  created: number;
  delay: number;
  id: string;
  karma: number;
  submitted: number[];
}

export async function fetchTopStories(): Promise<number[]> {
  const stories = [
    9129911,
    9129199,
    9127761,
    9128141,
    9128264,
    9127792,
    9129248,
    9127092,
    9128367,
    9038733
  ];
  return new Promise(resolve => setTimeout(() => resolve(stories), 300));
}

export async function fetchStory(id: number): Promise<AxiosResponse<Story>> {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
}

export async function fetchComment(id: number): Promise<Comment> {
  const comment: Comment = {
    by: "norvig",
    id: 2921983,
    kids: [2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141],
    parent: 2921506,
    text:
      "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
    time: 1314211127,
    type: "comment"
  };
  return new Promise(resolve => setTimeout(() => resolve(comment), 300));
}

export async function fetchUser(id: string): Promise<AxiosResponse<User>> {
  return axios.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
}
