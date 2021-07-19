import { generateId } from "../Utils/GenerateId.js";


export default class Item {
  constructor({ name, listId, id = generateId() }) {
    this.name = name;
    this.id = id;
    this.listId = listId;
  }


  get Template() {
    return ` 
    <li> <input type="checkbox" id="item" name="item" checked>${this.name}
    <span class="action" onclick="app.listsController.removeItem('${this.id}')">x</span></li>
            `
  }

}
