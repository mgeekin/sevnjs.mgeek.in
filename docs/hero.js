//hero section
function LoadHero(){
    append(appmain, gen("section", "hero", gen("h1", "", site.title), 'section container'), 'o')

    append(hero,
    [        
        gen(h2,"","7 function frontend library"),
        gen(span,"","Formerly known as GeneratorJS"),
        gen(p, '', 'Frontend design with less typing, less editing to HTML CSS SCSS<br />With only <b>Seven</b> functions</b>.'),
        gen(p, 'installButton', 'Install', 'button')
    ]
)

//main functions
append(hero, gen(span, 'instructionsButton', 'Instructions', 'button-blank', { "href": "#instructions" }))
}

LoadHero()
