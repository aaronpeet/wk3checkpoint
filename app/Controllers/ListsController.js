import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";

function _draw() {
    let template = ''
    let lists = ProxyState.lists
    lists.forEach(list => template += list.Template)
    document.getElementById('lists').innerHTML = template
}

export default class ListsController{
    constructor() {
        ProxyState.on('lists', _draw)
        ProxyState.on('items', _draw)
    }

    createList() {
        event.preventDefault()
        let form = event.target
        let rawList = {
            title: form.title.value,
            color: form.color.value
        }
        listsService.createList(rawList)
        form.reset()
    }

    destroy(id) {
        listsService.destroy(id)
    }

    addItem(listId) {
        event.preventDefault()
        let form = event.target
        let rawItem = {
            listId,
            name: form.item.value
        }
        listsService.addItem(rawItem)
        form.reset()
    }

    removeItem(id) {
        listsService.removeItem(id)
    }
}