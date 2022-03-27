// var num=67
// var num2=88
// sum = num+num2
// console.log(sum)

// var read=require('readline-sync')
// var value=read.question('Enter 2 numbers ')
// var value2=read.question(' ')
// if(value>value2){
//     console.log("first number is big" +value)

// }else
// {
//     console.log('second is big'+value2)
// }
// console.log(value,value2)

// 
// var a=["Azad","Arun","Anandu","Akash"]

// console.log(a)


// var num=10
// function hello(){
//    var num=20
//    console.log(num)
//     function hai(){
//        var num=30
//        console.log(num)
//     }
//     hai()
//     console.log(num)
//     console.log(num)
// } 
// hello()

// console.log(num)
// console.log(num)


// function Person(name,age,place){
//     this.name=name
//     this.age=age
//     this.place=place
//     this.display=function (){
//         console.log("Name :"+this.name,"Age : "+this.age,"Place :"+this.place)
//     }
// }
// var azad = new Person("Azad","25","Perumanna")
// var arun = new Person("Arun","22","Parammal")

// azad.display()
// arun.display()


// class Hello{
//     constructor(num1,num2){
//         this.num1=num1
//         this.num2=num2
//     }

//     hello(){
//         console.log("hello"+this.num1 +this.num2)
//     }
// }
// let hey=new Hello(20,40)
// hey.hello()

// var dt=new Date()
// console.log('Hello')
// for(i=0;i<1000;i++){
//     console.log("Loop")
// }
// console.log("end")
// var diff=new Date()-dt
// console.log(diff)


// function longTask(milliScondTime){
//     dt=new Date()
//     while((new Date-dt) <= milliScondTime){
        
//     }
// }

// console.log("started")
// longTask(4000)
// console.log("end")
var http=require('http')

http.createServer(Servercreate).listen(7000)

function Servercreate(req,res){
    res.write('Crossroads')
    res.end()
    
}