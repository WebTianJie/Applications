import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp  from "./component/funComp.jsx";
import MyClassComp from "./component/classComp";
// let  src="../img/a.png";
// let red='red';
// let h1=(
//     <h1><img src={src} className={red} style={{width:'100px',height:'200px'}} /></h1>
// )
//
// let  content="<h1>aaaaaaa</h1>>";
// let div=(<div>
//     {content}
// </div>)
// let dangeroue=(
//     <div dangerouslySetInnerHTML={{
//         __html:content
//     }}>
//
//     </div>
// )
// ReactDOM.render(dangeroue, document.getElementById('root'));

//ReactDOM.render(<div>{MyFuncComp()}</div>,document.getElementById('root'));//不显示组件结构
ReactDOM.render(<div>
        <MyFuncComp numer='1'/>
        <MyFuncComp numer={2}/>
        <MyFuncComp numer={3} />
        <MyFuncComp numer={4} />
        <MyClassComp numer='m1' />
        <MyClassComp numer='m2' />
        <MyClassComp numer='m1' />

    </div>,
    document.getElementById('root'));//显示组件组结构

