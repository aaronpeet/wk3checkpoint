

import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Item from "../Models/Item.js";

export function saveState() {
  localStorage.setItem('AaronsList', JSON.stringify({
    lists: ProxyState.lists,
    items: ProxyState.items
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('AaronsList'))
  console.log(data)
  if (data != null) {
    ProxyState.lists = data.lists.map(l => new List(l))
    ProxyState.items = data.items.map(i => new Item(i))
  }

}