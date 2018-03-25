/**
 * Created by locker on 3/22/2018.
 */
import Data from "./data";
import render from "./render";
import watchFlag from "./startListening";
import updateSummary from "./updateSummary";
watchFlag(Data,[render,updateSummary],[Data.showData(),Data.statistic()]);
Data.updateProjectById('1','resource',['xp','win7','DOS']);
console.log(Data.showData());
var pro1 = Data.showData();

var domStr = render(pro1);

