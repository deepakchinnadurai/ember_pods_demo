import Controller from "@ember/controller";
import { inject as controller } from "@ember/controller";

export default Controller.extend({
  arr: controller("input-task"),
  task: [],
  item:null,

  actions: {
    remove(item){
        this.get('arr').remove(item);
    },
    update(){
        //console.log(document.getElementById("new").placeholder);
        this.get('arr').remove(document.getElementById("new").placeholder);
        this.set("item",document.getElementById("new").value);
        this.get('arr').add(this.item);
    },
  },
  show() {
    var task = this.get("arr").show();
    this.set("task", task);
  },
});
