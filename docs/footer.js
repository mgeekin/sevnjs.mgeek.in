function loadFooter() {
    var footerStyle = `#appfooter {
    display: flex;
    min-height: 3em;
    background: hsl(calc(var(--hue) + 25), 75%, 16%);
    width: 100%;
    z-index: 2;
    flex-direction: column;
    // padding-inline: clamp(1em, 10vw, 15%);
    padding-top:2em;
    a  {
        color: $footcolor;
    }
    .sociallinks{
        display:block;
        font-family: ubuntu, roboto, arial;
        padding-inline:1em;
    }
}
`
    loadscss(footerStyle, "footer")
    append(appfooter, gen(div, "contact", gen(h1, "", "Contact", ''), 'section-small container'), 'over')
    append(contact, gen(a,social))
    console.info('footer loaded')
};


loadFooter();
