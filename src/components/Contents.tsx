import { For } from "solid-js";
import { A } from "solid-start";

import { chapters } from "./siteMap";
import "./Contents.css";

export default () => (
  <>
    <ul class="chapters-list">
      <For each={chapters}>{(chapter) => (
        <li>
          <A href={chapter.path}>
            {chapter.chapter ? chapter.chapter + "." : null} {chapter.title}
          </A>
        </li>
      )}
      </For>
    </ul>
  </>
)
