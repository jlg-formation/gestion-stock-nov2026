import { useReducer } from "react";
import type { Article } from "../types/Article";
import { sleep } from "../misc/sleep";

type Action = {
  type: "startLoadArticle" | "onSuccessLoadArticle";
  articles?: Article[];
};

type State = {
  isPending: boolean;
  articles: Article[];
};

function articleReducer(state: State, action: Action): State {
  switch (action.type) {
    case "startLoadArticle":
      return { ...state, isPending: true };
    case "onSuccessLoadArticle":
      return { ...state, isPending: false, articles: action.articles || [] };
  }
}

export default function About() {
  const [state, dispatch] = useReducer(articleReducer, { isPending: false, articles: [] });

  const handleClick = async () => {
    dispatch({ type: "startLoadArticle" });
    await sleep(2000);
    dispatch({
      type: "onSuccessLoadArticle",
      articles: [{ id: "12", name: "tournevis", price: 2, qty: 4 }],
    });
  };
  return (
    <main>
      <h1>About...</h1>
      <button onClick={handleClick}>Load article</button>
      <p>{JSON.stringify(state)}</p>
    </main>
  );
}
