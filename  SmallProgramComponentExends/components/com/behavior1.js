module.exports = Behavior({
  behaviors: [require('behavior2.js')],
  definitionFilter(defFields, definitionFilterArr) {
    // ..defFields 声明或引用当前behavior的对象,当前是组件对象
    console.log('behavior1 definitionFilter');
  }
})