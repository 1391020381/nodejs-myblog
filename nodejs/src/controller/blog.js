const {exec} = require('../db/mysql')
const getList = (author,keyword)=>{
 let sql = `select * from blogs where 1=1 `
 if(author){
     sql += `and author='${author}'`
 }
 if(keyword){
     sql += `and title like '%${keyword}%' `
 }
 sql += `order by createtime desc;`
 // 返回promise
 return exec(sql)
}
const getDetail = (id)=>{
    return {
        id:1,
        title:'标题A',
        content:'内容A',
        createTime:'15434343',
        author:'张三'
    }
}
const newBlog = (blogData = {})=>{
    // blogData
    return {
        id:3
    }
}
const updateBlog = (id,blogData={})=>{
    return true  
}
const delBlog = (id,blogData= {})=>{
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}