import { http, HttpResponse } from "msw/http";
import type { Article, NewArticle } from "../types/Article";

const STORAGE_KEY = "mock-articles-v1";

const initialArticles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 1234 },
  { id: "a2", name: "Pelle", price: 12.99, qty: 123 },
  { id: "a3", name: "Pioche", price: 2, qty: 12 },
];

function loadArticles(): Article[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === null) {
    saveArticles(initialArticles);
    return [...initialArticles];
  }
  return JSON.parse(stored) as Article[];
}

function saveArticles(articles: Article[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export const handlers = [
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json({
      id: "abc-123",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
  http.get("/api/articles", () => {
    return HttpResponse.json(loadArticles());
  }),
  http.post("/api/articles", async ({ request }) => {
    // 1. Récupérer le body JSON
    const body = (await request.json()) as NewArticle;

    // 2. Effectuer un traitement
    const article: Article = {
      id: crypto.randomUUID(),
      ...body,
    };

    const articles = loadArticles();
    articles.push(article);
    saveArticles(articles);

    // 3. Retourner une réponse HTTP
    return HttpResponse.json(article, {
      status: 201,
    });
  }),
];
