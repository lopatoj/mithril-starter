import styles from "~/styles.css";

import Example from "~/components/Example";

export default {
  oninit: () => {
    document.title = "mithril-starter";
  },

  view: () => {
    return m(Example, "mithril-starter");
  },
};
