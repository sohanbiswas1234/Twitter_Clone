<html>
  <head>
    <title>
        WorkList
    </title>
    <style>
      .parent{
        display: flex;
        justify-content: space-between;
      }
      .body1
      {
        display:flex;
        justify-content: space-between;
      }
      .bb
      {
        display:flex;
        flex-direction: row;
        background: linear-gradient(100deg, rgb(253, 251, 253), #a7ceef),rgb(139, 182, 234);
      }
      .card
      {
        padding-left: 2.5%;
        padding-right:2.5%;
        /* background-image: url(/pic/backg.jpg); */
        /* background: linear-gradient(90deg, rgb(139, 182, 234), #fdffff),rgb(253, 251, 253); */

      }
      .a{
        display:flex;
        flex-direction: column;
        height: 700px;
        width:25%;
        background-color: aqua;
      }
      .b
      {
        padding-top: 2%;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        height:700px;
        width:75%;
        background-color: bisque;
        padding-bottom: 3%;
      }
      .c{
            display:flex;
            flex-direction: column;
            height:700px;
            width: 35%;
      }
      .ba
      {
        display: flex;
        flex-direction: column;
        padding-left:3%;
        padding-top: 5%;
        height:200px;
        width:100%;
        background-color:#fdffff;
      }
      .bc
      {
        /* display:flex;
        flex-direction: column;
        justify-content: space-between; */
        overflow-y: auto;
        height:350px;
        width:100%;
        background-color:brown;
        padding: 7px;
      }
      .inside1
      {
        padding-top: 2%;
        padding-bottom: 7%;
        padding-left:2%;
        display:flex;
        flex-direction:row;
      }
      .profile
      {
        padding-top: 1%;
      }
    .button1
    {
        padding-top: 4.5%;
        padding-left:1%;
    }
    .recent
    {
        height:6%;
        width:100%;
        background-color: blue;
    }
    .ca{
         height:35%;
         width:100%;
         padding-top:7%;
         background-color: burlywood;
    }
    .cb{
        background-color: aquamarine;
        height:6.3%;
        width:100%;

    }
    .aa
    {
        display:flex;
        flex-direction: column;
        height:40%;
        width:100%;
        background-color: aqua;
    }
    .ab{
        display:flex;
        flex-direction: column;
        height:65%;
        width:100%;
        background-color: bisque;
    }
    .twitter_Symbol
    {
        padding-top: 15%;
        padding-left: 10%;
    }
    .twitter{
         font-size: 0.5cm;
         padding-left: 21%;
         padding-top:15%;
    }
    .user
    {
        color: grey;
        font-size:0.5cm;
        padding-left:19%;
        padding-top:10%;
    }
    .data
    {
        padding-left:8.5%;
        display:flex;
        flex-direction: column;
    }
    .home
    {
        padding-top:10%;
        display:flex;
        flex-direction: row;
    }
    .home1
    {
        padding-left:10%;
        padding-top: 2%;
    }
    .home2
    {
        padding-left:20%;
        padding-top:7%;
    }
    .profile1
    {
        padding-left:10%;
        padding-top: 2%;
    }
    .profile2
    {
        padding-left:20%;
        padding-top:7%;
    }
    .profile3
    {
        padding-top:10%;
        display:flex;
        flex-direction: row;
    }
    .post
    {
        padding-top:10%;
        display:flex;
        flex-direction: row;
    }
    .post1
    {
        padding-left:5%;
        padding-top: 2%;
    }
    .post2
    {
        padding-left:15%;
        padding-top:7%;
    }
    .logout
    {
        padding-top:10%;
        display:flex;
        flex-direction: row;
    }
    .logout1
    {
        padding-left:10%;
        padding-top: 2%;
    }
    .logout2
    {
        padding-left:20%;
        padding-top:7%;
    }
    .tweet
    {
        padding-top: 10%;
        padding-left:20%
    }
    .data1
    {
        display: flex;
        flex-direction: row;
    }
    .name
    {
        padding-left:5%;
    }
    .button-solid {
        padding: 0;
        border: none;
        /* background: none; */

}

    </style>
  </head>
 <!-- CSS only -->
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
 <!-- JavaScript Bundle with Popper -->
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
 <script
 src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"
 integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ=="
 crossorigin="anonymous"
 referrerpolicy="no-referrer"
></script>
  <body class="bb">
    <div class="a">
            <div class="aa card rounded-3">
                       
                <div class="twitter_Symbol">
                    <img src="./pic/Twitter-Symbol.png"
                    class="rounded-circle img-fluid"  style="width: 175px" style="height:300cm" alt="./pic/list.jpg">
                </div>
                <div class="twitter">
                       <b>Twitter-Clone</b>
                </div>
                <div class="user">
                       @<%=name%>
                       
                </div>
            </div>
            <div class="ab">
                     <div class="home">
                        <div class="home1"> 
                        <a href="/list"><img src="./pic/home.jpg"
                    class="rounded-circle img-fluid"  style="width: 50px" style="height:20cm" alt="./pic/home.jpg"></a>
                        </div>
                        <div class="home2">Home</div>
                           
                     </div>
                     <div class="profile3">
                        <div class="profile1"> 
                            <a href="/profile"><img src="./pic/profile.jpg"
                    class="rounded-circle img-fluid"  style="width: 50px" style="height:20cm" alt="./pic/home.jpg"></a>
                        </div>
                        <div class="profile2">profile</div>
                     </div>
                     <div class="post">
                        <div class="post1"> 
                        <a href="/post">    <img src="./pic/Twitter-Symbol.png"
                    class="rounded-circle img-fluid"  style="width: 75px" style="height:30cm" alt="./pic/home.jpg"></a>
                        </div>
                        <div class="post2">Post</div>
                    </div>
                     <div class="logout">
                        <div class="logout1"> 
                            <form action="/logout" method="post">
                         <button type="submit" class="button-solid" style="border-radius: 90px">  <img src="./pic/5844.jpg"
                    class="rounded-circle img-fluid"  style="width: 50px" style="height:20cm" alt="./pic/home.jpg"></button></form>
                        </div>
                        <div class="logout2">Logout</div>
                     </div>
                     
                     <div class="tweet">
                        <img src="./pic/tweet-button.png"
                        class=" img-fluid"  style="width: 125px" style="height:60cm" alt="./pic/home.jpg">
                     </div>
            </div>
    </div>
    <div class="b card rounded-3">
        <form action="/list" method="post">
        <div class="ba card rounded-4">
               <div class="inside1">
                <div class="profile">
                    <img src="./pic/vv.jpg"
                    class="rounded-circle img-fluid"  style="width: 40px" style="height:10cm" alt="./pic/list.jpg">
                </div>
                <div>
                    <input type="text" id="form1" name="text1" class="form-control" size="62%" style="height: 90;"  autocomplete="off" placeholder="Enter a task" required>
                </div>
                <div class="button1">
                    <button type="submit" class="rounded-3 btn btn-secondary ms-1">tweet</button> 
                </div>
                </div>
                
        </div>
        </form>
        <div class="bc card rounded-3">
            <table class="table mb-4">
                <thead>
                  <tr>
                    <th class="ab" scope="row">Recent Tweets</th>
                  </tr>
                </thead>
               <tbody>
                  <%data.forEach(function(data){%>
                      <tr>
                          <td>
                            <div class="data1">
                            <div>
                                <img src="./pic/vv.jpg"
                                class="rounded-circle img-fluid"  style="width: 20px" style="height:7.5cm" alt="./pic/list.jpg">
                            </div>
                                <div class="name">
                                    <%=data.name%>
                                </div>
                            </div>

                            <div class="data">

                               
                                <div><%=data.data%></div>
                                <div><%=data.time%></div>
                            </div>
                            </td>
                      </tr>

                 <% })%>
                  <tr>

                  </tr>
               </tbody>
              </table>
        </div>
    </div>
    <div class="c card rounded-3">
            <div class="cb">

            </div>
            <div class="ca">
                <blockquote class="twitter-tweet"><p lang="en" dir="ltr">RIP 𝕏 influencers?<br><br>Without an email list, you could be gone by tomorrow.<br><br>These 7 ChatGPT prompts get you set up to collect emails in minutes: <a href="https://t.co/LTSHNtZtZl">pic.twitter.com/LTSHNtZtZl</a></p>&mdash; Fabian Markl (@fabimarkl) <a href="https://twitter.com/fabimarkl/status/1702004906356298098?ref_src=twsrc%5Etfw">September 13, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
    </div>
                
                  <!-- <form action="/logout" method="POST">
                    <button type="submit" class="btn btn-outline-danger">Logout</button>
                  </form> -->

        <!-- <div style="display: none;" class="tokenDiv" id="tokenDiv">
            <%=token%>
        </div> -->
    
    <script type="text/javascript">
      if (location.href.indexOf('reload')==-1)
      {
         location.href=location.href+'?reload';
      }
      </script>
  </body>
</html>
<script>
    
    async function tokenValidation(token){
        var {data}=await axios.post('/tokenValidation',{token})
        console.log(data)
    }
    async function makeToken(){
        var {data}= await axios.get('/maketoken')
        if(data["status"]=='ok' && data["token"])
        localStorage.setItem('token',data["token"])
        else
        console.log("need to be redirected")
    }
    var token=localStorage.getItem('token')
        if(token){
            console.log("token found")
            tokenValidation(token)
        }
        else{
            makeToken()
            console.log("No token Found")
    }

</script>