import { http, HttpResponse } from "msw/http";
import type { Article } from "../types/Article";

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 1234 },
  { id: "a2", name: "Pelle", price: 12.99, qty: 123 },
  { id: "a3", name: "Pioche", price: 2, qty: 12 },
];

export const handlers = [
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json({
      id: "abc-123",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
  http.get("/api/articles", () => {
    return HttpResponse.json(articles);
  }),
];
