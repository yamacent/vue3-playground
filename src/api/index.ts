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

export async function fetchStory(id: number): Promise<Story> {
  const story: Story = {
    by: "dhouston",
    descendants: 71,
    id: 8863,
    kids: [
      8952,
      9224,
      8917,
      8884,
      8887,
      8943,
      8869,
      8958,
      9005,
      9671,
      8940,
      9067,
      8908,
      9055,
      8865,
      8881,
      8872,
      8873,
      8955,
      10403,
      8903,
      8928,
      9125,
      8998,
      8901,
      8902,
      8907,
      8894,
      8878,
      8870,
      8980,
      8934,
      8876
    ],
    score: 111,
    time: 1175714200,
    title: "My YC app: Dropbox - Throw away your USB drive",
    type: "story",
    url: "http://www.getdropbox.com/u/2/screencast.html"
  };

  return new Promise(resolve => setTimeout(() => resolve(story), 300));
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
