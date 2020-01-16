import  React from 'react'
import  ReactDom from 'react-dom'
export  default  function  MyFuncComp(prop) {
    return <h1>组件内容{prop.numer}</h1>
}

// ReactDom.render(<div>{MyFuncComp()}</div>,document.getElementById('root'));