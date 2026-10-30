import { createServer } from "vite";
import { renderToString } from "react-dom/server";
import { createElement } from "react";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const rendered = renderToString(createElement(App));
  const target = resolve("dist/index.html");
  const html = await readFile(target, "utf8");
  if (!html.includes('<div id="root"></div>')) throw new Error("Expected root mount missing");
  await writeFile(target, html.replace('<div id="root"></div>', '<div id="root">' + rendered + '</div>'));
  const check = await readFile(target, "utf8");
  for (const phrase of ["The Deal Is Only", "FIND YOUR STANDING", "SPORTS", "MUSIC", "FILM / TV", "The Audibles That Changed Sports", "NIL + Transfers Course", "CONTACT ALEX"]) {
    if (!check.includes(phrase)) throw new Error("Missing prerendered text: " + phrase);
  }
  console.log("Prerendered homepage HTML with complete visible initial content.");
} finally { await server.close(); }
