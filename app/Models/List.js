import { generateId } from "../Utils/GenerateId.js";

export default class List{
    constructor({ title, color, id= generateId() })
    {
        this.title = title;
        this.color = color;
        this.id = id;
    }
    get Template() {
        return `
        
        `
    }
}