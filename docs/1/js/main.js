window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const {h1, p, a} = van.tags
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.Typography.20241001115636/`}, 'Typography')),
        p('タイポグラフィ'),
//        p('typography'),
    )
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make())
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

