module.exports = Behavior({
  behaviors: [require('behavior3.js')],
  definitionFilter(defFields, definitionFilterArr) {
    // ..defFields 声明或引用当前behavior的对象,当前是behavior1对象
    //definitionFilterArr[0]代表behavior3的definitionFilter
    console.log('behavior2 definitionFilter');
    definitionFilterArr[0](defFields);
  }
})