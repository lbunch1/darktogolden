import Contents from "./Contents";
import { Show, children } from "solid-js";
import { A } from "solid-start";
import { chapters } from "./siteMap";

import "./BookPage.css";

export default function(props: any) {
  const child = children(() => props.children)

  const currentPageIndex = chapters.map((e) => e.title).indexOf(props.title);
  const currentPage = chapters[currentPageIndex];
  const previousPage = currentPageIndex === 0 ? null : chapters[currentPageIndex - 1];
  const nextPage = chapters.length - currentPageIndex < 2 ? null : chapters[currentPageIndex + 1];

  return (
    <div class="book-page">
      <aside class="aside-contents">
        <div class="aside-wrapper">
          <h2>Chapters</h2>
          <Contents />
        </div>
      </aside>
      <section>
        <h1>{currentPage.chapter ? "Chapter " + currentPage.chapter + " - " : null}{currentPage.title}</h1>
        {child()}
        <div class="prev-next">
          <Show when={!previousPage}>
            <div></div>
          </Show>
          <Show when={previousPage}>
            <A href={previousPage.path} class="prev">
              {previousPage.chapter ? "Ch." + previousPage.chapter + " - " : null}{previousPage.title}
            </A>
          </Show>
          <Show when={nextPage}>
            <A href={nextPage.path} class="next">
              {nextPage.chapter ? "Ch." + nextPage.chapter + " - " : null}{nextPage.title}
            </A>
          </Show>
        </div>
        <details>
          <summary><h3>Chapters</h3></summary>
          <Contents />
        </details>
      </section>
    </div>
  )
}
