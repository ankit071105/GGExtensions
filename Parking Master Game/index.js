var doc=document,docEl=doc.documentElement;docEl.html=doc.documentElement.innerHTML;var build=function(e,t){e=document.createElement(e);return e.innerHTML=t,e};doc.createElement("d");var ds_=document.createElement("style");function next1(){var t=!0===document.getElementById("av_").checked;!0===document.getElementById("at_").checked?swal({title:"Create a password",text:"When you anyone enter's your server, they'll be prompted to enter this password.",content:"input"}).then(function(e){(t?startLocal:startPublic)(e)}):(!0!==document.getElementById("av_").checked||!1===document.getElementById("av_").checked?startPublic:startLocal)()}function startLocal(e){location.href=e?"server.html?server="+localStorage.ip+"&p="+e:"server.html?server="+localStorage.ip}function startPublic(e){var t,n;e?(t=function(){return Math.random().toString(36).substr(2)},n=function(){return t()+t()},location.href="server.html?server="+n()+"&p="+e):(t=function(){return Math.random().toString(36).substr(2)},n=function(){return t()+t()},location.href="server.html?server="+n())}function deleteLocalLobbies(){localStorage.setItem("current_lobbies",""),$.get("index.html",function(e,t){$("body").html(e)})}function availableLobbies(){document.getElementsByClassName("box")[0].style.display="block"}function openFaliureBMark2(){confirm("Click the share button and click 'Add to bookmarks'")&&confirm("Then, click 'Save'. Edit the bookmark and continue")&&confirm("Click 'OK' below to copy code line, and paste it into the 'URL' bar")&&alert("Done!\nYou have an offline browser app.")}function fadeTrans(){var e=document.createElement("div");e.className="transition",e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.left="0",e.style.top="0",e.style.backgroundColor="#FFF",e.style.opacity="0",e.style.zIndex="9999";var t=document.createElement("style"),n=document.createTextNode(".transition {vertical-align: top;}");setTimeout(function(){document.getElementsByClassName("transition")[0].style.transition="opacity 0.8s",document.getElementsByClassName("transition")[0].style.WebkitTransition="opacity 0.8s",document.getElementsByClassName("transition")[0].style.opacity="0"},500),t.appendChild(n),document.body.appendChild(e),setTimeout(function(){document.getElementsByClassName("transition")[0].style.opacity="1"},1e3)}function opensignup(){location.solo("/signup.html")}function openlogin(){location.solo("/log-in.html")}function logout_user(){Parse.User.logOut(),location.solo("/log-in.html")}function openAccount(){location.solo("/account.html")}function openProfile(){location.solo("/profile.html")}function docReady(e){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(e,1):document.addEventListener("DOMContentLoaded",e)}ds_.innerText="d { border-bottom:1px solid #222; }",setInterval(function(){document.createElement("dr");docEl.html.replace("<dr>","<br><br>"),docEl.html.replace("<dr/>","<br><br>"),docEl.html.replace("<dr />","<br><br>")},100),document.head.appendChild(ds_),securityjs.auth("ip","134.56.126.103","64.134.172.10"),document.getElementById("start-a-server").addEventListener("click",function(){var e,t=document.createElement("div");t.innerHTML='<form><p>Availability:</p><input id="av_" type="radio" name="av_" onmouseup="if(document.getElementById(\'av_\').checked===true){document.getElementById(\'av_\').checked=false;}"><label for="av_">Local</label><br><p>Authorization</p><input id="at_" type="radio" name="at_"><label for="at_">Password</label><hr><a style="color:#333;font-size:1.5vw;" onclick="next1();" href="#">Next</a></form>',swal({icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVrgUk8qkCn5Fer46maNOxyfWphRH1I1N1A&usqp=CAU",title:"Options",buttons:!1,content:t}),e=e||document,window.radioChecked||(window.radioChecked={}),window.radioClick=function(e){const t=e.target,n=t.name||"unnamed";if(e.keyCode)return t.checked=32!=e.keyCode;t.checked=window.radioChecked[n]!=t,window.radioChecked[n]=t.checked?t:null},e.querySelectorAll("input[type='radio']").forEach(e=>{e.setAttribute("onclick","radioClick(event)"),e.setAttribute("onkeyup","radioClick(event)")}),document.querySelector(".swal-icon").style.width="15%"}),newb__=setInterval(function(){var e;"100px"===document.querySelector(".wpcc-btn").style.width?clearInterval(newb__):(document.querySelector(".wpcc-btn").style.width="100px",(e=document.createElement("a")).className="wpcc-btn",e.tabindex="0",e.innerText="Clear",e.style.width="100px",e.style.position="relative",e.style.left="150px",e.id="clearC",document.querySelector(".wpcc-compliance").appendChild(e),document.getElementById("clearC").addEventListener("click",function(){localStorage.clear(),location.reload()}))},100),time_remain_check__=setInterval(function(){localStorage.time_remain?(setInterval(function(){localStorage.setItem("time_remain",document.getElementById("time-remain-before").value)},10),document.getElementById("time-remain-before").value=localStorage.time_remain,document.getElementById("time-remain-before").stepUp(-1),document.getElementById("time-remain").value=localStorage.time_remain,"0"===document.getElementById("time-remain").value&&(deleteLocalLobbies(),document.getElementById("time-remain-before").value="600",localStorage.setItem("time_remain","600"))):localStorage.setItem("time_remain","600")},1e3),document.querySelector("button").addEventListener("click",function(){document.getElementById("click-sound-mp3").currentTime=0,document.getElementById("click-sound-mp3").play()}),document.getElementById("server_address").href=location.protocol+"//"+location.host+"/",function(){var e;document.getElementById("user").innerHTML="Not updated",localStorage.user&&(e=localStorage.user,document.getElementById("user").innerHTML=e),document.getElementById("save").addEventListener("click",function(){var e=document.getElementById("user").innerHTML;localStorage.setItem("user",e)},!1)}(),function(){var e=(t=["a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z","1","2","3","4","5","6","7","8","9","0","-","_"])[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)]+t[Math.floor(Math.random()*t.length)],t=document.getElementById("user-token");localStorage.token?t.innerText=localStorage.token:t.innerText=e}(),function(){var e=window.location.href;if(e.includes("?javascript=")||e.includes("&javascript=")){var t=window.location.search;const n=new URLSearchParams(t);e=n.get("javascript"),t=document.createElement("script");t.innerHTML=e,document.body.appendChild(t)}}(),function(){var r=new PubNub({publishKey:"pub-c-1287ae95-a235-4e93-a918-c7eef82de787",subscribeKey:"sub-c-638fa8a4-fded-11eb-b38c-d287984b4121"});function e(e){return document.getElementById(e)}var t=e("box"),i=(e("input"),"10chat-demo");r.addListener({message:function(e){t.innerHTML=(""+e.message).replace(/[<>]/g,"")+""+t.innerHTML}}),r.subscribe({channels:[i]}),document.getElementById("create-lobby").addEventListener("click",function(){!function o(){build("div","<input />");swal({icon:"info",title:"Enter lobby name",content:"input",allowOutsideClick:!1,buttons:["Cancel","Next →"]}).then(function(e){var t,n=e;n.length<6?swal({icon:"info",title:"Error",text:"Lobby name must be over 6 characters."}).then(function(){swal.close(),setTimeout(o,200)}):" "===e?swal({icon:"info",title:"Error",text:"Lobby name cannot contain only whitespace."}).then(function(){swal.close(),setTimeout(o,200)}):e.includes(" ")?swal({icon:"info",title:"Error",text:"Lobby name cannot contain whitespace."}).then(function(){swal.close(),setTimeout(o,200)}):20<e.length?(swal({icon:"info",title:"Error",text:"Lobby name cannot be over 20 characters."}).then(function(){swal.close(),setTimeout(o,200)}),t="\\"):1==e.split("").some(function(e){return 6016<=(e=e.charCodeAt("0"))&&e<=6143||6624<=e&&e<=6655})||e.includes("<")||e.includes(">")||e.includes("/")||e.includes(t)||e.includes("'")||e.includes('"')||e.includes("(")||e.includes(")")||e.includes("[")||e.includes("]")||e.includes("|")?swal({icon:"info",title:"Error",text:"Invalid character."}).then(function(){swal.close(),setTimeout(o,200)}):(document.getElementById("lobby-name").innerHTML=n,function(){r.publish({channel:i,message:"lobby-created()"});var e=document.createElement("iframe"),t=document.getElementById("lobby-name").innerHTML;""===document.getElementById("lobby-name").innerHTML&&(document.getElementById("lobby-name").innerHTML="Lobby"),e.src="https://external-testing-3.w3spaces.com/gameLobby.html?lby_name="+t+"&new_lobby=true",e.style="border: 0; position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: 0; z-index: 9999; width: 100%; height: 100%;",e.frameborder="0",document.body.appendChild(e)}())})}(),checked_lobby_foo___=!0}),setInterval(function(){document.getElementById("box").innerHTML.includes("lobby-created()")&&(get_lobby__=setInterval(function(){var e;localStorage.current_lobbies&&(e=localStorage.current_lobbies,document.getElementById("current_lobbies").innerHTML=e,document.getElementById("lobby-name").innerHTML,clearInterval(get_lobby__))},1e3),document.getElementById("lobby-name").innerHTML,r.publish({channel:i,message:"createPublicLobby()"}),check_lobby__=setInterval(function(){var e,t,n,o,r;!1===checked_lobby_foo___||document.getElementById("box").innerHTML.includes("createPublicLobby()")&&(checked_lobby_foo___=!1,clearInterval(check_lobby__),document.getElementById("box").innerHTML,e=document.getElementById("lobby-name").innerHTML,t=document.getElementById("user-token").innerHTML,document.getElementById("current_lobbies").innerHTML=document.getElementById("current_lobbies").innerHTML.replace(/No active lobbies/g,""),document.getElementById("current_lobbies").innerHTML+="<a href='https://"+location.host+"/gameLobby.html?lby_name="+e+"&user_token="+t+"&new_lobby=true'>"+e+"</a><br><small style='color: gray; opacity: 0.3;'><span id='hours'></span></small><hr><br>",document.getElementById("hours").innerHTML=(n=new Date,o=n.getHours(),r=n.getMinutes(),n=12<=o?"pm":"am",(o=(o%=12)||12)+":"+(r=r<10?"0"+r:r)+" "+n))},10),document.getElementById("save2").click())},500)}(),localStorage.current_lobbies&&(document.getElementById("current_lobbies").innerHTML=localStorage.current_lobbies),document.getElementById("save2").addEventListener("click",function(){var e=document.getElementById("current_lobbies").innerHTML;localStorage.setItem("current_lobbies",e)},!1),location.solo=function(e){NProgress.start();var t=setInterval(function(){NProgress.inc()},1e3);setTimeout(function(){clearInterval(t),NProgress.done()},500),NProgress.done&&setTimeout(function(){document.open(),document.write('<iframe scrolling="no" oncontextmenu="return false;" style="overflow:hidden;border:0;width:100%;height:100%;margin:0;position:absolute;left:0;right:0;top:0;bottom:0;padding:0;z-index:99999;" src="'+e+'"></iframe>'),document.close()},1e3),jQuery(window).unload(function(){NProgress.start()}),document.querySelector("details").addEventListener("click",function(){document.addEventListener("keydown",function(e){"Escape"===e.key&&(document.querySelector("details").click(),document.querySelector("details").removeEventListener("click"),document.removeEventListener("keydown"))})})},Parse.initialize("YzfPeLuKx1JmcXyeJ3qL36fmphqhzv7Ke9mXzmFv","byPMDYRSUxmJ8GtwIiBZTebeL8qZB7geFXDLcJju"),Parse.serverURL="https://parseapi.back4app.com/",function(){(n=Parse.User.current())||(document.querySelector("details").remove(),document.getElementById("lobby-wrapper1").innerHTML='<div style="cursor:text;user-select:text;-ms-user-select:text;-moz-user-select:text;-wekit-user-select:text;color:#222;">Only <d style="cursor:text;user-select:text;-ms-user-select:text;-moz-user-select:text;-wekit-user-select:text;">Members</d> Can access this feature.<br><br><a onclick="opensignup()" href="#signup" style="color:#444;">Sign up</a> or <a onclick="openlogin()" href="#login" style="color:#444;">Login</a> to access this feature.</div>',document.querySelector("details").remove||(document.querySelector("details").outerHTML=""));var e=n.get("username"),t=n.get("email");if(document.getElementsByClassName("user-email")[0].innerText=t,document.getElementsByClassName("user-name")[0].innerText=e,window.location.href.includes("logged-in=true")&&window.location.href.includes("username")&&window.location.href.includes("pass")||n){new URLSearchParams(window.location.search).get("email");t=new URLSearchParams(window.location.search).get("username"),new URLSearchParams(window.location.search).get("pass");""===t||""===document.getElementById("username").innerText?document.getElementById("username").innerText=e:document.getElementById("username").innerText=t;var n,t=document.createElement("style");if(Parse.initialize("YzfPeLuKx1JmcXyeJ3qL36fmphqhzv7Ke9mXzmFv","byPMDYRSUxmJ8GtwIiBZTebeL8qZB7geFXDLcJju"),Parse.serverURL="https://parseapi.back4app.com/",void 0===(n=Parse.User.current()).get("profilePic")||null==n.get("profilePic"))return t.innerText='#profile-pic::before { content: ""; display: inline-block; width: 1vw; height: 1vw; background-image: url(https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190415714/121105442-creative-illustration-of-default-avatar-profile-placeholder-isolated-on-background-art-design-grey-p.jpg?ver=6); background-size: cover; }',document.querySelector("details").querySelector("summary").querySelector("li").appendChild(t);t.innerText='#profile-pic::before { content: ""; display: inline-block; width: 1vw; height: 1vw; background-image: url('+n.get("profilePic")+"); background-size: cover; }",document.querySelector("details").querySelector("summary").querySelector("li").appendChild(t),document.getElementById("login-buttons-signup-2").innerHTML='<button style="width:5.208333333333333vw;height:2.1vw;font-size:0.8vw;position: relative;left: 3.90625vw; top: 30%; margin-top: -8px;" class="pushy__btn pushy__btn--sm pushy__btn--simple" onclick="$run(logout_user());" onclick="$run(logout_user());">Log out</button>'}}(),docReady(function(){}),document.getElementById("url").innerHTML=window.location.href,window.onload=function(){var e=document.getElementById("url").innerHTML;e.includes("score=1")?(document.getElementById("aval-score").innerHTML="1pt",document.getElementById("mods").action="https://parkingmaster.w3spaces.com/mod-downloads.html?score=1"):e.includes("score=2")?(document.getElementById("aval-score").innerHTML="2pts",document.getElementById("mods").action="https://parkingmaster.w3spaces.com/mod-downloads.html?score=2"):e.includes("score=3")?(document.getElementById("aval-score").innerHTML="3pts",document.getElementById("mods").action="https://parkingmaster.w3spaces.com/mod-downloads.html?score=3"):e.includes("score=4")?(document.getElementById("aval-score").innerHTML="4pts",document.getElementById("mods").action="https://parkingmaster.w3spaces.com/mod-downloads.html?score=4"):document.getElementById("aval-score").innerHTML="0pts"};var index='<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width" /></head><body><iframe oncontextmenu="return false;" src="lvl1.html" style="position:absolute; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; overflow:hidden; z-index:9999;">Your browser doesn\'t support iframes</iframe></body</html>';function replaceIndexPage(e){document.open(),document.write(e),document.close()}var url=document.getElementById("url").innerHTML;function replaceContent(){replaceIndexPage(index)}function startIdle(){setTimeout(function(){startTimeOut(),startTimer()},15e3)}function startTimeOut(){document.getElementById("paraGraph1").innerHTML='<b>Warning:</b> you will Auto Quit in 00:<span id="time">15</span> seconds...&nbsp<a id="blackLine" href="javascript:refresh()">I&#8217m still here</a>'}function startTimer(){var e=document.getElementById("time");setTimeout(function(){e.innerHTML="14"},1e3),setTimeout(function(){e.innerHTML="13"},2e3),setTimeout(function(){e.innerHTML="12"},3e3),setTimeout(function(){e.innerHTML="11"},4e3),setTimeout(function(){e.innerHTML="10"},5e3),setTimeout(function(){e.innerHTML="09"},6e3),setTimeout(function(){e.innerHTML="08"},7e3),setTimeout(function(){e.innerHTML="07"},8e3),setTimeout(function(){e.innerHTML="06"},9e3),setTimeout(function(){e.innerHTML="05"},1e4),setTimeout(function(){e.innerHTML="04"},11e3),setTimeout(function(){e.innerHTML="03"},12e3),setTimeout(function(){e.innerHTML="02"},13e3),setTimeout(function(){e.innerHTML="01"},14e3),setTimeout(function(){e.innerHTML="00"},15e3),setTimeout(function(){home()},16e3)}function home(){"function"==typeof window.home?window.home():document.all&&(window.location.href="about:home")}function refresh(){location.reload()}/Android|webOS|iPhone|iPad|Mahc|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var diffKeys=-1!=navigator.userAgent.toLowerCase().indexOf("mac")?"Cmd":"Ctrl";function openBookmarkModal1(){swal({title:"Step 1:",text:"Press "+diffKeys+" + d on keyboard.",button:"Next",icon:"info"}).then(function(){swal({title:"Step 2:",text:'Click "Save".',icon:"info",button:"Next"}).then(function(){swal({title:"Step 3:",text:'Edit the bookmark and click "Copy" below. Paste it in the "URL" box.',icon:"info",button:"Copy"}).then(function(){var e=document.getElementById("text_input_copy");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),swal({title:"Done!",text:"Click the bookmark to play offline!",icon:"success"})})})})}var elem=document.documentElement,d=document.getElementById("myAudio");function playAudio(){d.play(),document.getElementById("pause-audio_9474").innerHTML='<a id="audio-play_9573" href="javascript:pauseAudio();"><img src="https://user-images.githubusercontent.com/85320577/125478656-269b1674-a9d7-4dd3-9d1f-57ce617dbaa1.png" width="5%" /></a>'}function pauseAudio(){d.pause(),d.currentTime=0,document.getElementById("pause-audio_9474").innerHTML='<a id="audio-play_9572" href="javascript:playAudio();"><img src="https://user-images.githubusercontent.com/85320577/125479052-7decfff4-fd49-4a4a-996f-7f190d3bfdc5.png" width="5%" /></a>'}