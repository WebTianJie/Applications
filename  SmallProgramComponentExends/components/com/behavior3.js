module.exports = Behavior({
  definitionFilter(defFields, definitionFilterArr) {
      // ..defFields 声明或引用当前behavior的对象,当前是behavior2对象
    console.log('behavior3 definitionFilter');
  }
})