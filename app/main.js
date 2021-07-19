import ListsController from "./Controllers/ListsController.js";
//import ValuesController from "./Controllers/ValuesController.js";

class App {
  //valuesController = new ValuesController();

  listsController = new ListsController();
}

window["app"] = new App();
