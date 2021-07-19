import { generateId } from "../Utils/GenerateId.js";

export default class List{
    constructor({ title, color, id= generateId() })
    {
        this.title = title;
        this.color = color;
        this.id = id;
    }
    get Template() {
        return `   <div class="col-3 mt-5">
                    <div class="card listCard" style="width: 18rem;">
                        <div class="card-header ${this.color == "Yellow" ? "bg-warning" : this.color == "Green" ? "bg-success" : this.color == "Blue" ? "bg-primary" : this.color == "Teal" ? "bg-info" : "bg-danger"} text-light d-flex justify-content-around align-items-center">
                            <h3>${this.title}:</h3>
                            <span class="action" onclick="app.listsController.destroy('${this.id}')">X</span>
                        </div>
                        <div id="items">
                          
                            <form onsubmit="app.listsController.addItem(${this.id})">
                                <input type="text" name="item" placeholder="Add Tasks..." required>
                                <button type="submit" class="btn btn-outline-success">+</button>
                            </form>
                        </div>
                    </div>
                </div>
            `
    }
}