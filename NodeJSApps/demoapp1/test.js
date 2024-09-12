// console.log("Node JS Starts...")
// console.log("Happy Valentines day")

console.log("*****demo1.js*****")
const name =require("./demo1")
console.log(name)

console.log("*****demo2.js*****")
const {a,b}=require("./demo2")
console.log(`Output:${a+b}`)

console.log("*****demo3.js*****") // to store the functions we are importing we have to assign them a object
const obj=require("./demo3")
console.log("Addition="+obj.add())
console.log("Subtraction="+obj.sub())

console.log("*****demo4.js*****")
const {courses,product,studentlist}=require("./demo4")
console.log("----Courses----")
console.log("COURSES LENGTH="+courses.length)
courses.map( (c)=>{
    console.log(c)
})
  

console.log("----Product----")
console.log("PRODUCT ID="+product.pid)
console.log("PRODUCT NAME="+product.pname)
console.log("PRODUCT PRICE="+product.price)


console.log("----STUDENT LIST----")
studentlist.map(   (student,i) =>{ 
    console.log("STUDENT "+(i+1))
    console.log("STUDENT NAME :"+student.sname)
    console.log("STUDENT GSTATUS:"+student.status)

})

