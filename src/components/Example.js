import styles from "~/styles.css";

export default {
  view: (vnode) => {
    return m(Link, { href: "https://github.com/lopatoj/mithril-starter" }, vnode.children);
  },
};
