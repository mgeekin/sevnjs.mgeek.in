append(appmain, gen(section, "install", "", 'section,container'))


function loadInstall(){


    getfile("./part/install.md",installmd =>{
        parsemd(installmd, content => {
            append(`#install`, content,"o")
            grab(`#installButton[0]`).addEventListener('click', () => { install.scrollIntoView({ block: 'center', behavior: 'smooth' }) })

        })
    })

}

loadInstall()