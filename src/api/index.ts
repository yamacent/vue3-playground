import axios, { AxiosResponse } from "axios";

export interface Item {
  type: string;
}

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

export function isStory(item: Item): item is Story {
  return item.type === "story";
}

export function isComment(item: Item): item is Comment {
  return item.type === "comment";
}

export async function fetchTopStories(): Promise<AxiosResponse<number[]>> {
  return axios.get("https://hacker-news.firebaseio.com/v0/topstories.json");
}

export async function fetchItem<T = Item>(
  id: number
): Promise<AxiosResponse<T>> {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
}

export async function fetchStory(id: number): Promise<AxiosResponse<Story>> {
  const res = await fetchItem<Story>(id);
  if (res.data.type !== "story") {
    throw new Error("not story");
  }
  return res;
}

export async function fetchComment(
  id: number
): Promise<AxiosResponse<Comment>> {
  const res = await fetchItem<Comment>(id);
  if (res.data.type !== "comment") {
    throw new Error("not comment");
  }
  return res;
}

export async function fetchUser(id: string): Promise<AxiosResponse<User>> {
  return axios.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
}
