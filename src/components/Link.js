import m from "mithril";
import styles from "~/styles.css";

export default {
  view: (vnode) => {
    if (vnode.attrs.href.startsWith("http")) {
      return m("a", { class: vnode.attrs.class, href: vnode.attrs.href, target: "_blank" }, vnode.children);
    } else {
      return m(m.route.Link, { class: vnode.attrs.class, href: vnode.attrs.href }, vnode.children);
    }
  },
};
