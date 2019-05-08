
var clothingInfo = []

function searchAPI(button) {
  var x = button.id;
  switch(x){
    //all
    case '1':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
      break;
    //shirts
    case '2':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_shirts&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
      break;
    //pants
    case '3':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_trousers_dressed&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
      break;
   //shorts
    case '4':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_shorts&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
      break;
    //jackets
    case '5':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_jacketscoats&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
      break;
    //hoodies
    case '6':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_hoodiessweatshirts_sweatshirts&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
      break;
    //longsleeves
    case '7':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_tshirtstanks_longsleeve&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
      break;
    //blazers
    case '8':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_blazerssuits_blazers&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
      break;
    default:
      false;
  }
  //INCASE WE WANT TO SEARCH, THIS WORKS TOO
  
  // if(userInput == "shirts"){
  //   var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_shirts&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
  // }else if (userInput == "trousers") {
  //   var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_trousers_dressed&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
  // }
  // else if (userInput == "blazers") {
  //   var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_blazerssuits_blazers&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
  // }
  // else if (userInput == "shorts") {
  //   var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_shorts&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
  // }
  // else if (userInput == "hoodies") {
  //   var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_hoodiessweatshirts_sweatshirts&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
  // }
  // else if (userInput == "jackets") {
  //   var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_men_jacketscoats_bomberjackets&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
  // }
  // else if (userInput == "longsleeve") {
  //   var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_tshirtstanks_longsleeve&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
  // }
  // else if (userInput == "all") {
  //   var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all&sortBy=stock&concepts=H%26M+MAN&country=us&lang=en&currentpage=0&pagesize=30';
  // }
  
    fetch(url, {
        headers: {
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '7c110681ffmsheae40b84551548bp1af7b0jsndd8cc771c959'
        }
    }).then(res => res.json())
        .then(function (data){
            for(let i = 0; i < data['results'].length; i++){
                var image = data['results'][i]['images'][0]['url'];
                var code = data['results'][i]['articleCodes'][0];
                $(".images").append(`<img src="${image}" id="${code}" onclick="clothingDetails(this.id)" style="width:25%">`);
                clothingInfo.push({
                  code: data['results'][i]['articleCodes'][0],
                  name: data['results'][i]['name'],
                  price: data['results'][i]['price']['formattedValue'],
                  url: data['baseUrl'] + data['results'][i]['linkPdp'],
                  images: data['results'][i]['images'][0]['url']
              })
            }
            // console.log(clothingInfo);
        })
  }

 

clothingDetails = (clicked_id) => {
  // console.log(clothingInfo);
  index = clothingInfo.findIndex(item => item.code == clicked_id);
  document.getElementById("clothName").innerHTML= clothingInfo[index].name;
  document.getElementById("clothPrice").innerHTML= clothingInfo[index].price;
  document.getElementById("clothURL").innerHTML= clothingInfo[index].url;
  document.getElementById("urlID").href=clothingInfo[index].url;
}
  
