import { generateId } from "../Utils/GenerateId.js";


export default class Item{
  constructor({ name, id = generateId() })
  {
    this.name = name;
    this.id = id;
  }
}

//get Template(){
  //  return ` <div class="pl-3 mt-2">
    //            <input type="checkbox" id="${this.name}" name="${this.name}" checked>
      //          <label for="scales">${this.name}</label>
        //    </div>`
//}