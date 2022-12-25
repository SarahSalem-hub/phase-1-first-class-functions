function receivesAFunction(para){
    para()
}

function returnsANamedFunction(){
     
    return function g(){}
    
}
function returnsAnAnonymousFunction(){
    return (()=>{})
}