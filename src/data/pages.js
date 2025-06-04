const pages = {
  home: () => "/",
  aboutus: () => "/aboutus",
  list: () => "/list",
  detail: (id = ":id") => `/posts/${id}`,
};

export default pages;
