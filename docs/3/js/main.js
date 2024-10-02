window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    /*
    const {h1, p, a} = van.tags
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.Typography.20241001115636/`}, 'Typography')),
        p('タイポグラフィ'),
//        p('typography'),
    )
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make())
    */
    hljs.highlightAll();
    const C = hljs.highlight('js', `console.log('Hello JS !!');`)
    console.log(C);
    console.log(C.value);
    //console.log(hljs.highlight('js', `console.log('Hello JS !!');`));
    //document.querySelector('code-0').innerHTML = (hljs.highlight('js', `console.log('Hello JS !!');`)).value;
    document.querySelector('#code-0').innerHTML = C.value;
    for (let el of document.querySelectorAll('code[data-lang]')) {
        el.classList.add('hljs')
        el.innerHTML = hljs.highlight(el.dataset.lang, el.textContent).value
    }
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

