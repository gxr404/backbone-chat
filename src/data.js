// 用户列表
let userListData = [{
    id: 1,
    name: 'backbone2',
    img: './dist/images/Portrait2.jpg'
}, {
    id: 2,
    name: 'webpack',
    img: './dist/images/Portrait3.jpg'
}, {
    id: 3,
    name: 'node',
    img: './dist/images/Portrait4.jpg'
}]

// 当前用户
let selfData = {
    id: 0, //最高0
    name: 'gxr1020',
    img: './dist/images/Portrait1.jpg'
}

let sessionListData = [{
    sessionId: 1,
    text: 'Hello，这是一个基于Backobne + Webpack构建的简单chat示例，聊天记录保存在localStorge.',
    date: new Date(),
    isSelf: false
}, {
    sessionId: 1,
    text: '项目地址: https://github.com/coffcer/vue-chat',
    date: new Date(),
    isSelf: false
}, {
    sessionId: 1,
    text: 'hello world',
    date: new Date(),
    isSelf: true
}, {
    sessionId: 2,
    text: '用了es6的语法',
    date: new Date(),
    isSelf: false
}, {
    sessionId: 2,
    text: 'backbone+webpack',
    date: new Date(),
    isSelf: true
}, {
    sessionId: 3,
    text: '作者的开发环境是<br/>node:v5.8.0<br/>npm:3.7.3',
    date: new Date(),
    isSelf: false
}, {
    sessionId: 3,
    text: '因为window下node-sass需要较高的node版本环境',
    date: new Date(),
    isSelf: false
}]

export { selfData, userListData, sessionListData };
