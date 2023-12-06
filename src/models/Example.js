import m from "mithril";

const Example = {
  getUserData: (username) => {
    return m.request({
      method: "GET",
      url: `https://api.github.com/users/${username}`,
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default Example;