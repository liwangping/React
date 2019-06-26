- typescript 将js 弱类型变成强类型
    类型 声明 文件 @types/react
- webpack-dev-server 不会刷新浏览器
- webpack-dev-server --inline   刷新浏览器
  webpack-dev-server --inline --hot 刷新浏览器需要更新的局部 热更新

- typescript 是js超集， js是在ts里可以完全运行的
 跟java一样 静态语言 先编译一下
- 强制类型声明

vendor 代码声明 按需加载
vendor: [
            'react',
            'react-dom'
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css'
        ]

webpack的优化