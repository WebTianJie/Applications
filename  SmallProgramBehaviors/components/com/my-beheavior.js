module.exports=Behavior({
 properties:{},
 data:{},
 methods:{},
 attached(){
   console.log('beheavior attached');
 },
 lifetimes:{
   attached() {
     console.log('beheavior lifetimes attached');
   }
 }
})