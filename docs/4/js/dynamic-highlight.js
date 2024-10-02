// highlight.js リソースの遅延ロード
class DynamicHighlight {
    constructor() {
        paths = {
            lang: {
                html: ['', false],
                css: ['', false],
                js: ['', false],
            },
            style: {
                default: ['', false],
                dark: ['', false],
                light: ['', false],
            },
        }
    }
    addLang(lang, onAddLang) {
        const script = document.createElement('script');
        script.src = `/languages/${lang}.min.css`
        document.body.appendChild(script);
        script.onload = ()=>onAddLang(lang);

aliases
        // hljs.listLanguages().map(l=>hljs.getLanguage(l))
        // 1. hljs.listLanguages()
        // 2. hljs.getLanguage(l):  .name, .aliases
    console.log()
        for (let l of document.querySelectorAll(`pre code.${lang}, `))
        hljs.highlightBlock(el)
    }
}
