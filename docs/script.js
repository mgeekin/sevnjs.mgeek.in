window.DEBUG = 1;
if (window.DEBUG == 1) {
    sessionStorage.clear()
    localStorage.clear()
    document.getElementById("preloader").style.zIndex = -1000;
}

const setLayout = () =>{
    load(["./defaults.js","./assets/styles/sitestyle.scss"])
    //app layout
    append(app, "", "over") /* reset app */
    append(app, gen(header, "appheader", 'header', 'header'));
    append(app, gen(main, "appmain", 'main', 'appmain'));
    append(app, gen(footer, "appfooter", "", ''));

}

setLayout()
load("index.js")



setTimeout(() => {
    WebHelper().init()
}, 3000)
// $$.loadCustomizer()





