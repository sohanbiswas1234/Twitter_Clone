const express=require("express");
const bodyparser=require("body-parser");
const mongoose=require("mongoose");
const multer=require("multer");
const app=express();
var jwt=require('jsonwebtoken')
var JWT_SECRET='fdfdffdf#*78934kjfdufhK#$*#&(kjbdskfbkfe889r93r973jfs973#*#&&)(@wdjwdh'

app.use(express.json())
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extented:true}));

// const storage=multer.memoryStorage();
// const upload=multer({storage:storage});


var i=0;
var name5;
let Email;
let error;
let Name;
let email2;
let mobile_no;
let today1;
let act_time;
let Password;
let id;
let arr=[];
let Symbol;

var token='';

 mongoose.connect("mongodb+srv://sohan2002biswas:Deep1234@cluster0.5jyx4ue.mongodb.net/twitter-clone");

 const listSchema=new mongoose.Schema(
     {
    name:String,
    email:String,
    password:String,
    phone:Number,
    arrr:Array
    }
 )
 const app2=mongoose.model("app2",listSchema);


 const list1Schema=new mongoose.Schema(
    {
        name:String,
        email:String,
        data:String,
        time:String,
    }
 )
 const app1=mongoose.model("app1",list1Schema);
app.get("/",function(req,res)
{
    res.render("home");
})
app.get("/register",function(req,res)
{
     res.render("register",{isvalid:true});
})
app.get("/login",function(req,res)
{
    res.render("login",{isvalid:true});
})

app.post("/register",function(req,res)
{
    arr=[];
    Name=req.body.first_name;
    Email=req.body.mail;
    Password=req.body.password;
    mobile_no=req.body.mobile;
    email2=req.body.mail;
    arr.push(Email);
    app2.find({},function(err,data3)
    {
        if(err)
        {
            console.log("an error occured");
        }
        else if(data3<1)
        {
            const appp=new app2(
                {
                    name:Name,
                    email:Email,
                    password: Password,
                    phone:mobile_no,
                    arrr:arr
                }
            )
            appp.save();
            res.redirect("/list");
        }
        else{
            app2.find({email:Email},function(err,data2)
            {
                if(data2==0)
                {
                const appp=new app2(
                    {
                        name:Name,
                        email:Email,
                        password: Password,
                        phone:mobile_no,
                        arrr:arr
                    }
                )
                appp.save();
                res.redirect("/list");
                }
                else{
                    res.render("register",{isvalid:false});
                }
            }).count()
            
        //     app2.find({email:Email},function(err,data)
        //     {
        //         if(err)
        //         {
        //             console.log("an error occured");
        //         }
        //         else if(data==null)
        //         {
        //             const appp=new app2(
        //                 {
        //                     name:Name,
        //                     email:Email,
        //                     password: Password,
        //                     phone:mobile_no 
        //                 }
        //             )
        //             appp.save();
        //            res.redirect("/list");
        //         }
        //         else{
        //             res.render("register",{isvalid:false});
        //         }
        // })
    }}).count();
   
    })

app.post("/login",function(req,res)
{
    Email=req.body.username;
    console.log(Email);
    let Password=req.body.password;
    console.log(Password);
    app2.findOne({email:Email},function(err,data2)
    {
        if(err)
        {
            console.log("An error occured");
        }
        else if(data2==null){

            console.log("Wrong mail id");
            res.render("login",{isvalid:false});
        }
        else
        {
            if(data2.password===Password)
            {
                mobile_no=data2.phone;
                Name=data2.name;
                email2=data2.email;
                arr=data2.arrr;
                var id=data2._id
                token=jwt.sign(
                    {
                        id,email2   
                    },
                    JWT_SECRET
                )
                res.redirect("/list");
            }
            else
            {
                console.log("incorrect password");
                res.render("login",{isvalid:false});
            }
        }
    })
})
app.post('/tokenValidation',(req,res)=>{
    try {
        var {token}=req.body
    var decoded=jwt.verify(token,JWT_SECRET)
    var {id,email2}=decoded
    console.log(id,email2)
        res.json({
            'status':'ok',
            'id':id,
            'email':email2
        })

    } catch (err) {
        console.log(err)
        res.json({
            'status':'not ok',
            'instruct':'delete_token'
        })        
    }
})
app.get('/maketoken',(req,res)=>{
    console.log("make token from app.js")
    if(token){
    res.json({
        'status':'ok',
        'token':token
    })
    }else{
    token=''
    res.json({
        'status':'no token'
    })
    }

})
app.get("/list",function(req,res)
{
    console.log(arr);
    app1.find({email:arr},function(err,data1)
    {
        if(err)
        {
            console.log("An error occured");
        }
        else{
            res.render("list",{data:data1,name:Name});
        }

    })
})
app.post("/list",function(req,res)
{

    const data2=req.body.text1;

    const appp=new app1(
        {
            name:Name,
            email:Email,
            data:data2,
            time:act_time
        }
    )
    appp.save();
    res.redirect("/list");
})
app.get("/profile",function(req,res)
{
    i=0;
    app2.find({},function(err,data)
    {
        if(err)
        {
            console.log("An error occured");
        }
        else
        {
            console.log(data);
            res.render("profile",{name:Name,email:Email,mobile:mobile_no,nooflist:data,no:i,array1:arr});
        }
    })
})

app.get("/post",function(req,res)
{
    app1.find({email:Email},function(err,data1)
    {
        if(err)
        {
            console.log("An error occured");
        }
        else{
            res.render("post",{data:data1,name:Name});
        }

    })
})
app.post("/delete",function(req,res)
{
    const id1=req.body.delete;
    console.log(id1);
    app1.findByIdAndRemove({_id:id1},function(err)
    {
        if(err)
        {
            console.log("an error occured");
        }
        else{
            console.log("element deleted successfully");
        }
    })
    res.redirect("/post");
})
app.post("/update",function(req,res)
{
    var data1=req.body.input;
    console.log(data1);
    app1.findByIdAndUpdate({_id:id},{data:data1},function(err)
    {
        if(err)
        {
            console.log("an error occured");
        }
        else{
            console.log("element updated successfully");
        }
    })
    res.redirect("/list");
    
})
app.get("/update",function(req,res)
{
    res.render("update",{name:Name,email:Email});
})
app.post("/submit",function(req,res)
{
    id=req.body.submit;
    res.redirect("/update");
})
app.post("/logout",function(req,res)
{
    token=''
    res.redirect("/");
})

app.post("/follow",function(req,res)
{
     const id2=req.body.follow;
     arr.push(id2);
     console.log(arr);
     console.logz=(arr)
     app2.updateOne({email:Email},{arrr:arr},function(err)
     {
        if(err)
        {
            console.log("an error occured");
        }
        else{
            console.log("element updated successfully");
        }
     })
     res.redirect("/profile");

})
app.post("/unfollow",function(req,res)
{
    const id2=req.body.unfollow;
    let x;
    let length=arr.length;
    for(let j=0;j<length;j++)
    {
        if(arr[j]===id2)
        {
            x=j;
        }
    }
    let temp;
    temp=arr[length-1];
    arr[length-1]=arr[x];
    arr[x]=temp;
    arr.pop();
    console.log(arr);
    app2.updateOne({email:Email},{arrr:arr},function(err)
    {
        if(err)
        {
            console.log("an error occured");
        }
        else{
            console.log("element updated successfully");
        }
    })
    res.redirect("/profile");

})
setInterval(function()
{
    const date=new Date();
    const time=date.toTimeString();
    // let act_date=date.substring(0,10);
    act_time=time.substring(0,5);
    // console.log(act_date);
   // console.log(act_time);
},10000)

app.listen(3000,function()
{
    console.log("server running on port 3000");
})
