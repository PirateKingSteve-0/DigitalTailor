
function testAPI() {
    fetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30', {
        headers: {
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '7c110681ffmsheae40b84551548bp1af7b0jsndd8cc771c959'
        }
    }).then(res => res.json())
        .then(function (data){
            for(let i = 0; i < data['results'].length; i++){
                var image = data['results'][i]['images'][0]['url'];
                $(".images").append(`<img src="${image}" style="width:25%">`);
            }
        });
}