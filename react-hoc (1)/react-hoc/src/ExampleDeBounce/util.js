/**
 * 防抖
 * func wait
 */
export function debounce (func, wait){
    var result;
    return function(){
        // this
        // 参数
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
             result = func.apply(this, args)
        }, wait);
        return result;
    }
}

/**可用于装饰的防抖 */
export function debounce (){
    return function(){
        // this
        // 参数
    }
}