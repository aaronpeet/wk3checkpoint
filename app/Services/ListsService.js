import {ProxyState} from "../AppState.js"
import List from "../Models/List.js"
import Item from "../Models/Item.js"

 class ListsService{
      createList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
  }

  addItem(rawItem) {
    ProxyState.items = [...ProxyState.items, new Item(rawItem)]
  }

  destroy(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    ProxyState.items = ProxyState.items.filter(item => item.listId != id)
  }
  removeItem(id) {
    ProxyState.items = ProxyState.items.filter(item => item.id != id)
  }
 }

 export const listsService = new ListsService()