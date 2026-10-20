//hero section
function LoadHero(){
    loadscss(`
        .subtitle{
        font-size:1.7em;}
        `)

    append(appmain, gen("section", "hero", gen("h1", "", site.title), 'section container'), 'o')

    append(hero,
    [        
        gen("span,i","",`Formerly known as <a href="https://generatorjs.mgeek.in/">GeneratorJS</a>.`),
        // gen(h2,"","7 function frontend library"),
        gen(p,"","A Lightweight <strong><b>7-Function</b></strong> JavaScript Library for Network-Efficient Web Applications, Suitable for <strong><b>Resource-Constrained IoT Devices.</b></strong>","subtitle"),
        
        // gen(p, '', 'A Lightweight <strong><b>7-Function</b></strong> JavaScript Library for Network-Efficient Web Applications, Suitable for <strong><b>Resource-Constrained IoT Devices.</b></strong>'),
        gen("p,i", '', 'Frontend design with less typing, few edits to HTML/CSS/SCSS. Everything (HTML/CSS/SCSS) is javascript, make web like programmer.'),
        gen("p,b","","You are seven functions away from loving it."),// add , Start Here with link to youtube 
        gen(p, 'installButton', 'Install', 'button')
    ]
)

//main functions
append(hero, gen(span, 'instructionsButton', 'Instructions', 'button-blank', { "href": "#instructions" }))
}

LoadHero()
