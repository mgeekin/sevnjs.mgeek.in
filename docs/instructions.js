function loadInstructions(){
    
append(appmain, gen(section, "instructions", gen(h1, "", "Instructions"), 'section container'))




append(instructions, gen(h2, "", 'It has seven functions'))
// gen based on array to be done
// append('instructions', gen(ol, '', gen(li, '', ['load', 'gen', 'append'])))

append(instructions, gen(div, 'loaddiv', gen(h1, '', 'load(ArrayOfStylesAndScriptsLinks)'), 'section-small'))
append(loaddiv, gen(p, '', 'This function can load single or multiple stylesheets (*.css) and / or scripts (*.js) or meta tags in head.'))
append(instructions, gen(div, 'gendiv', gen(h1, '', 'gen(tagname, id, content or child, classes, src)'), 'section-small'))
append(gendiv, gen(p, 'genp', 'This function can creat and return html elements in dom .<br/>'))

append(instructions, gen(div, 'appenddiv', gen(h1, '', 'append(ParentId, ChildHtml, Position)'), 'section-small'))
append(appenddiv, gen(p, 'appendp', 'This function to append html of string to an element<br/>'))
genArray = ['ParentId is the if where html needs to be updated.<br/>',
    'ChildHtml can be string or html element, Array of strings or array or html elements can also be passed.<br/>',
    'Position can be "after", "before", or "over". It is optional and by default "after"<br/>  ']

genArray.forEach(element => {
    append(appendp, gen(p, "", gen(span, "", element, 'small')))
});


instArray = ['Tagname can be any commonly used html tag, like div, p, img, span etc<br /> ',
    gen(code, "", 'gen(div)'),
    "It will create a div element in dom",
    gen(code, "", 'gen(div,"someId")'),
    "It will create a div element with id=someId",
    gen(code, "", 'gen(div,"someId","Text inside element")'),
    "It will create a div element with id=someId having inner html 'Text inside element'",
    gen(code, "", 'gen(div,"someId","Text inside element","list of classes")'),
    "It will create a div element with id=someId having inner html 'Text inside element' with all the classes='list of classes'",
    gen(code, "", 'gen(div,"someId","Text inside element","list of classes","srcOrHref")'),
    "last argument is required with tags like img, a, script, video where source needs to be specified",
]
var heroinstructionsButton = grab(`#instructionsButton`)[0]
heroinstructionsButton.addEventListener('click', () => { instructions.scrollIntoView({ block: 'center', behavior: 'smooth' }) })
setTimeout(grab(`#instructionsButton`)[0].addEventListener('click', () => { instructions.scrollIntoView({ block: 'center', behavior: 'smooth' }) })
,3000)


}

loadInstructions()
