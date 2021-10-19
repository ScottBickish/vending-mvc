import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Private
// function _draw() {
//   let values = ProxyState.values;
//   let cardsTemplate = ''
//   values.forEach(v => cardsTemplate += v.CardTemplate)
//   document.getElementById("app").innerHTML = /*html*/`
//   <div class="my-3">
//     <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.addValue()">Add Value</button>  
//     <div class="values d-flex flex-wrap my-3">
//       ${cardsTemplate}
//     </div>
//   </div>
//   `
// }

//Public
function _draw(){
  let money = document.getElementById('billfold')
    money.innerText = `you haven $${ProxyState.money.toString()} for snacks`
  
  }
export class ValuesController {
  constructor() {
    console.log(ProxyState.snacks)
    ProxyState.on('money', _draw)

  }
  
    getMoney(){
     
      valuesService.getMoney()
    }
    // ProxyState.on("values", _draw);
    // _draw()
  

  // addValue() {
  //   valuesService.addValue()
  // }

  // removeValue(id) {
  //   valuesService.removeValue(id)
  // }

}
