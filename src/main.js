import Navigo from "navigo";
import News from "./page/admin/news/news";
import dashBoard from "./page/admin/dashboard";
import SignIn from "./page/signin";
import SignUp from "./page/signup";
import addNews from "./page/admin/news/addNews";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};
router.on({
    "/": () => {
        print("Trang chủ");
    },
    "/signup": () => {
        print(SignUp.render());
    },
    "/signin": () => {
        print(SignIn.render());
    },
    "/admin/dashboard": () => {
        print(dashBoard.render());
    },
    "/admin/news": () => {
        print(News.render());
    },
    "/admin/news/add": () => {
        print(addNews.render());
    },
    "/admin/news/:id/edit": () => {
        print(addNews.render());
    },

});
router.notFound(() => print("Not Found Page"));
router.resovol();