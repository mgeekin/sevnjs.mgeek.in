append(appmain, gen(section, "install", "", 'section,container'));


function loadInstall(){


    getfile("./part/install.md",installmd =>{
        parsemd(installmd, content => {
            append(`#install`, content,"o")
            setTimeout(() => {
                grab(`#installButton[0]`).addEventListener('click', () => { install.scrollIntoView({ block: 'center', behavior: 'smooth' }) });
            },3000);
    });

};

loadInstall();