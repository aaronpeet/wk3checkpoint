import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";

export default class List{
    constructor({ title, color, id= generateId() })
    {
        this.title = title;
        this.color = color;
        this.id = id;
    }
    get Template() {
        return /*html*/`   <div class="col-md-3 col-sm-2 mt-3">
                    <div class="card listCard" style="width: 18rem;">
                        <div class="card-header ${this.color == "Orange" ? "bg-warning" : this.color == "Green" ? "bg-success" : this.color == "Blue" ? "bg-primary" : this.color == "Teal" ? "bg-info" : "bg-danger"} text-light d-flex justify-content-around align-items-center">
                            <h3>${this.title}:</h3>
                            <span class="action" onclick="app.listsController.destroy('${this.id}')">X</span>
                        </div>
                        <div class="p-2">
                          <ul>
                               ${this.MyItems}
                          </ul>
                        </div> 
                        <form onsubmit="app.listsController.addItem(event, '${this.id}')">
                            <input type="text" name="name" placeholder="Add Tasks..." minlength=3 maxlength=50required>
                            <button type="submit" class="btn btn-outline-success">+</button>
                        </form>
                    </div>
                </div>
            `
    }

    get MyItems() {
      let template = ''
        let items = ProxyState.items.filter(item => item.listId === this.id)
        items.forEach(item => {
            template += item.Template
        })
        return template
    }
}