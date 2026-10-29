import { useEffect } from "react";
import { useArticleStore } from "../stores/ArticleStore";

export const useStockList = () => {
  const myRefresh = useArticleStore((state) => state.refresh);
  const { articles, isPending, errorMsg } = useArticleStore();

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      await myRefresh(controller);
      console.log("fini");
    };
    load();

    return () => {
      controller.abort();
    };
  }, [myRefresh]);

  return {
    articles,
    isPending,
    errorMsg,
  };
};
