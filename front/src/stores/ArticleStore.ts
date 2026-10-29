import { create } from "zustand";
import type { Article, NewArticle } from "../types/Article";
import { sleep } from "../misc/sleep";

type ArticleStoreState = {
  articles: Article[];
  isPending: boolean;
  errorMsg: string;
  add: (newArticle: NewArticle) => Promise<void>;
  refresh: () => Promise<void>;
};

export const useArticleStore = create<ArticleStoreState>((set) => ({
  articles: [],
  isPending: false,
  errorMsg: "",
  add: async (newArticle) => {
    await fetch("/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    });
  },
  refresh: async () => {
    console.log("start refresh");
    set({ isPending: true, errorMsg: "" });
    await sleep(2000);
    const response = await fetch("/api/articles");
    const json = await response.json();
    set({ articles: json, isPending: false });
  },
}));
