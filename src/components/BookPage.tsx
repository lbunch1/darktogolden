import Contents from "./Contents";
import { Show, children } from "solid-js";
import { A } from "solid-start";
import { chapters } from "./siteMap";
import { leftChev, rightChev } from "./chevrons";

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
              <div>
                {leftChev}
              </div>
              <div class="margin-auto">
                {previousPage.chapter ? "Ch." + previousPage.chapter + " - " : null}{previousPage.title}
              </div>
            </A>
          </Show>
          <Show when={nextPage}>
            <A href={nextPage.path} class="next">
              <div class="margin-auto">
                {nextPage.chapter ? "Ch." + nextPage.chapter + " - " : null}{nextPage.title}
              </div>
              <div>
                {rightChev}
              </div>
            </A>
          </Show>
        </div>
        <div class="mobile-chapters">
          <hr />
          <details>
            <summary><h3>Chapters</h3></summary>
            <Contents />
          </details>
        </div>
      </section>
    </div>
  )
}
