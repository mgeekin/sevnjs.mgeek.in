//SiteDefaults
const site = {}
site.title = "SevnJS"
site.site_title = site.title
site.subtitle = `${site.title} : 7 function frontend library`
site.logo = '/assets/img/logo.png'
site.image = site.logo
site.favicon = '/assets/img/favicon.ico'
site.image = site.logo
site.description = '"7 function frontend library for modular website frontend desing. Formely known as GeneratorJS. Few functions to generate frontend design without juggeling between HTML CSS and JS. Reduce repetetive typing in HTML.'
site.url = 'https://sevnjs.mgeek.in/'
site.sponsors = `https://github.com/sponsors/sevnjs?o=esc`
site.github = `https://github.com/sevnjs/cdn.git`

var social = [
    { tag: 'a', id: 'fb', innerHTML: 'Facebook', href: "https://facebook.com/mGeek.in", target: "_blank", classList: 'sociallinks' },
    { tag: 'a', id: 'tg', innerHTML: 'Telegram', href: "https://t.me/mGeek", target: "_blank", classList: 'sociallinks' },
    { tag: 'a', id: 'git', innerHTML: 'Github', href: site.github, target: "_blank", classList: 'sociallinks' },
    { tag: 'a', id: 'mail', innerHTML: 'Email', href: `mailto:care@mgeek.in?subject=Related to SevnJS&body=From : ${window.location.href}`, target: "_blank", classList: 'sociallinks' },
    { tag: 'a', id: 'sponsors', innerHTML: 'Sponsor', href: site.sponsors, target: "_blank", classList: 'sociallinks' }
]

