module.exports=Behavior({
  //  definitionFilter(defFields,definitionFilterArr){
  //    defFields.data.form="behavior 修改后form的值"
  //  },
   behaviors:[
     require('./behavior2.js'),
     require('./behavior3.js')
   ],
   definitionFilter(defFields,definitionFilterArr){
    console.log('behavior definitionFilter',
      defFields.data.form = defFields.data.form+"试试");
   },
})