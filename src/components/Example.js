import m from "mithril";
import styles from "~/styles.css";

export default {
  view: (vnode) => {
    return (
      <Link href="https://github.com/lopatoj/mithril-starter">{vnode.children}</Link>
    );
  },
};
