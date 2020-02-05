import {pop} from 'assets/json/pop-goods.json'
import {fashion} from 'assets/json/fashion-goods.json'
import {selection} from 'assets/json/selection-goods.json'

export function getGoods(type,page) {
  let myGoods=new Array();
  let Goods = new Array();

  if(type == 'pop'){
    Goods = pop
  }
  else if(type == 'new'){
    Goods = fashion
  }
  else if(type == 'sell'){
    Goods = selection
  }

  for(let i = page*30;i<(page+1)*30;i++){
    myGoods.push(Goods[i])
  }

  // console.log(myGoods)
  return myGoods
}
