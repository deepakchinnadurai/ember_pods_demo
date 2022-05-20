import Controller from "@ember/controller";
import { inject as controller } from "@ember/controller";

export default Controller.extend({
  output: controller("display-task"),
  arr: [],

  actions: {
    save() {
      if(this.get("task")==null) return;
      this.arr.push(this.get("task"));
      document.getElementById("ta").value = "enter another one";
    },
    up() {
      this.get("output").show();
    },
  },
  show() {
    return this.arr;
  },
  remove(item) {
    this.arr.removeObject(item);
  },
  add(item) {
    console.log(item);
    this.arr.push(item);
  },
});
