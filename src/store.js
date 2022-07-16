export default class Store {
  static getData = () => JSON.parse(localStorage.getItem('taskitems'));

  static savetolist = (taskitems) => {
    localStorage.setItem('taskitems', JSON.stringify(taskitems));
  }
}
