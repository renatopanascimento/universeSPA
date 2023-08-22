export class Router {
  routes = {};

  add(pathname, page) {
    this.routes[pathname] = page;
  }

  route(event) {
    event = event || window.event;

    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    const links = document.querySelectorAll(".menu-navigation a");

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.getElementById("app").innerHTML = html;
      });

    for (let i = 0; i < links.length; i++) {
      if (links[i].getAttribute("href") === pathname) {
        links[i].classList.add("active");
      } else {
        links[i].classList.remove("active");
      }
    }
  }
}
