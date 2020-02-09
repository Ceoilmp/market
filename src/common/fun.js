import {pop} from 'assets/json/pop-goods-1.json'
import {fashion} from 'assets/json/fashion-goods-1.json'
import {selection} from 'assets/json/selection-goods-1.json'
import {detail_pop} from 'assets/json/detail_pop.json'
import {detail_fashion} from 'assets/json/detail_fashion.json'
import {detail_new} from 'assets/json/detail_new.json'

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

export function getDetailGoods(type,id) {
  let iid = parseInt(id)
  switch (type) {
    case 'pop':
      return detail_pop[iid-1]
      break
    case 'new':
      return detail_fashion[iid-1]
      break
    case 'sell':
      return detail_new[iid-1]
      break
  }
}
