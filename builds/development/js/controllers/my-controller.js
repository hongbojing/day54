angular
    .module('myApp')
    .controller('myController',myController);
function myController(){
    var vm = this;

    vm.testData = [
        {name:'hongbo1', age:21, habbit:'caonima11',id:1},
        {name:'hongbo2', age:22, habbit:'caonima22',id:2},
        {name:'hongbo3', age:23, habbit:'caonima33',id:3},
        {name:'hongbo4', age:24, habbit:'caonima44',id:4},
        {name:'hongbo5', age:25, habbit:'caonima55',id:5},
        {name:'hongbo6', age:26, habbit:'caonima66',id:6}
    ];
}
