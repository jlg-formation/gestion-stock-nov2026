import { create } from "zustand";
import type { Article, NewArticle } from "../types/Article";
import { sleep } from "../misc/sleep";

type ArticleStoreState = {
  articles: Article[];
  isPending: boolean;
  errorMsg: string;
  add: (newArticle: NewArticle) => Promise<void>;
  refresh: (controller?: AbortController) => Promise<void>;
  remove: (selectedArticleIds: Set<Article["id"]>) => Promise<void>;
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
  remove: async (selectedArticleIds: Set<Article["id"]>) => {
    const array = [...selectedArticleIds];
    await fetch("/api/articles", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(array),
    });
  },
  refresh: async (controller = new AbortController()) => {
    try {
      console.log("start refresh");
      set({ isPending: true, errorMsg: "" });
      await sleep(2000);
      const response = await fetch("/api/articles", {
        signal: controller.signal,
      });
      if (response.ok === false) {
        throw new Error();
      }
      const json = await response.json();
      set({ articles: json });
    } catch (err) {
      console.log("err: ", err);
      if (controller.signal.aborted) {
        return;
      }
      set({ errorMsg: "Erreur technique." });
    } finally {
      set({ isPending: false });
    }
  },
}));
