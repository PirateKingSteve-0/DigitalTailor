
function searchAPI(button) {
  var x = button.id;
  switch(x){
    //all
    case '1':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all&country=us&lang=en';
      break;
    //shirts
    case '2':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_shirts&country=us&lang=en';
      break;
    //pants
    case '3':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_trousers_dressed&country=us&lang=en';
      break;
   //shorts
    case '4':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_shorts&country=us&lang=en';
      break;
    //jackets
    case '5':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_jacketscoats&country=us&lang=en';
      break;
    //hoodies
    case '6':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_hoodiessweatshirts_sweatshirts&country=us&lang=en';
      break;
    //longsleeves
    case '7':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_tshirtstanks_longsleeve&country=us&lang=en';
      break;
    //blazers
    case '8':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_blazerssuits_blazers&country=us&lang=en';
      break;
  //women
    //all
    case '101':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=ladies_all&country=us&lang=en';
      break;
    //dresses
    case '102':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=ladies_dresses&country=us&lang=en';
      break;
    //shirts and blouses
    case '103':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=ladies_shirtsblouses&country=us&lang=en';
      break;
   //Cardigans/sweaters
    case '104':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=ladies_cardigansjumpers&country=us&lang=en';
      break;
    //jeans
    case '105':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=ladies_jeans&country=us&lang=en';
      break;
    //tops
    case '106':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=ladies_tops&country=us&lang=en';
      break;
    //shorts
    case '107':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=ladies_shorts&country=us&lang=en';
      break;
    //shoes
    case '108':
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=ladies_shoes&country=us&lang=en';
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
            $(".images").empty();
            for(let i = 0; i < data['results'].length; i++){
                var image = data['results'][i]['images'][0]['url'];
                var code = data['results'][i]['articleCodes'][0];
                $(".images").append(`<img src="${image}" draggable="true" ondragstart="drag(event)" id="${code}" style="width:25%">`);
            }
        });
  }
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
