var clothingInfo = []

let outfit1_total = 0;
let outfit2_total = 0;
let outfit3_total = 0;
let outfit4_total = 0;

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
      var url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_shoes&country=us&lang=en';
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

    fetch(url, {
        headers: {
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '7c110681ffmsheae40b84551548bp1af7b0jsndd8cc771c959'
        }
    }).then(res => res.json())
        .then(function (data){
            $(".products").empty();
            for(let i = 0; i < data['results'].length; i++){
                var image = data['results'][i]['images'][0]['url'];
                var code = data['results'][i]['articleCodes'][0];
                $(".products").append(`
                  <div class="col-3 product border border-secondary">
                    <div class="row">
                      <div class="col-12 product-name text-center">${data['results'][i]['name']}</div>
                      <div class="col-12 product-image border-top border-bottom border-dark"><img src="${image}" draggable="true" ondragstart="drag(event)" id="${code}" style="width:100%"></div>
                      <div class="col-12 product-price text-center">${data['results'][i]['price']['formattedValue']}</div>
                    </div>
                  </div>`);
                clothingInfo[data['results'][i]['articleCodes'][0]] = {
                  name: data['results'][i]['name'],
                  price: data['results'][i]['price']['formattedValue'],
                  url: data['baseUrl'] + data['results'][i]['linkPdp'],
                  images: data['results'][i]['images'][0]['url']
                };
              }
          })
  }

function shareOutfits(){
  let sender = $("#shareYourName").val();
  let receiver = $("#shareTheirName").val();
  let email = $("#shareTheirEmail").val();

  if(!email.includes("@") || !email.includes(".")){
    alert("Email should contain an @ and .");
    return false;
  }

  let outfits = [];

  for(i = 1; i <= 4; i++){
    if(document.getElementById(`outfit${i}-share`).checked){
      let outfit = [];
      let outfit_raw = document.getElementById(`outfit${i}`).getElementsByTagName('img');
      for(let item of outfit_raw){
        let lookup_id = item.id.replace("-clone", "");
        outfit[item.parentNode.id.replace(`outfit${i}-`, "")] = clothingInfo[lookup_id];
      }
      outfits[`outfit${i}`] = outfit;
    }
  }  
  sendShareEmail(sender, receiver, email, outfits);
}

/* Functions used to add drag and drop functionality */
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var nodeCopy = document.getElementById(data).cloneNode(true);

  switch(ev.target.parentNode.id){
    case 'outfit1':
      outfit1_total += parseFloat(clothingInfo[nodeCopy.id].price.replace("$", ""));
      $('#outfit1-total').text(outfit1_total.toFixed(2));
      break;
    case 'outfit2':
      outfit2_total += parseFloat(clothingInfo[nodeCopy.id].price.replace("$", ""));
      $('#outfit2-total').text(outfit2_total.toFixed(2));
      break;
    case 'outfit3':
      outfit3_total += parseFloat(clothingInfo[nodeCopy.id].price.replace("$", ""));
      $('#outfit3-total').text(outfit3_total.toFixed(2));
      break;
    case 'outfit4':
      outfit4_total += parseFloat(clothingInfo[nodeCopy.id].price.replace("$", ""));
      $('#outfit4-total').text(outfit4_total.toFixed(2));
      break;
  }

  nodeCopy.id = nodeCopy.id+"-clone"
  ev.target.appendChild(nodeCopy);
}

function dropRemove(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var node = document.getElementById(data);
  let lookup_id = data.replace("-clone", "");
  switch(node.parentNode.parentNode.id){
    case 'outfit1':
      outfit1_total -= parseFloat(clothingInfo[lookup_id].price.replace("$", ""));
      $('#outfit1-total').text(Math.abs(outfit1_total.toFixed(2)));
      break;
    case 'outfit2':
      outfit2_total -= parseFloat(clothingInfo[lookup_id].price.replace("$", ""));
      $('#outfit2-total').text(Math.abs(outfit2_total.toFixed(2)));
      break;
    case 'outfit3':
      outfit3_total -= parseFloat(clothingInfo[lookup_id].price.replace("$", ""));
      $('#outfit3-total').text(Math.abs(outfit3_total.toFixed(2)));
      break;
    case 'outfit4':
      outfit4_total -= parseFloat(clothingInfo[lookup_id].price.replace("$", ""));
      $('#outfit4-total').text(Math.abs(outfit4_total.toFixed(2)));
      break;
  }
  if(node.id.includes("-clone"))
    node.parentNode.removeChild(node);
}