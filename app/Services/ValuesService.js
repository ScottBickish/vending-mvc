import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";

class ValuesService {
 getMoney(){
  ProxyState.money += 0.25
  console.log(ProxyState.money)
  
 }
 purchase(name){
   
   let found = ProxyState.snacks.find(s => s.name === name)
    if(found.price <= ProxyState.money){
     ProxyState.money -= found.price
      ProxyState.money = ProxyState.money
    }else{
      
      return alert('no monnies')
   
    }

 }
 
}
//  addValue() {
//     ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
//   }
//   removeValue(id) {
//     const values = ProxyState.values.filter(v => v.id !== id)
//     ProxyState.values = values
//   }
export const valuesService = new ValuesService();

