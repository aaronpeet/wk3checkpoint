import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import {loadState, saveState } from "../Utils/LocalStorage.js"

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
        ProxyState.on('lists', saveState)
        ProxyState.on('items', saveState)

        loadState()
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
        if (window.confirm('Do you really want to delete?'))
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