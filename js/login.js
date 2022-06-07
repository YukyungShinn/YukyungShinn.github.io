class Signlist{
    constructor(userId,email,userName,pwd,job,datetime=Date.now()){
        this.userId=userId;
        this.email=email;
        this.userName=userName;
        this.pwd=pwd;
        this.job=job;
        this.datetime=datetime;
    }
}
class Idlist{
    constructor(userId){
        this.userId=userId;
    }
}
class Pwdlist{
    constructor(pwd){
        this.pwd=pwd;
    }
}

document.signupFrm.onsubmit=()=>{
    if(!userId.value){
        alert("존재하지 않는 회원입니다.");
        return false;
    }
}

//값 저장
const saveIdPwd=()=>{
    const userIdVal=userId.value;
    const emailVal=email.value;
    const userNameVal=userName.value;
    const pwdVal=pwd.value;
    const jobVal=job.value;
    const signlist = new Signlist(userIdVal,emailVal,userNameVal,pwdVal,jobVal);
    const idlist = new Idlist(userIdVal);
    const pwdlist=new Pwdlist(pwdVal);
    
    //배열에 저장
    const signlists=JSON.parse(localStorage.getItem("signlists"))||[];
    console.log(signlist);
    signlists.push(signlist);

    const idlists=JSON.parse(localStorage.getItem("idlists"))||[];
    console.log(idlist);
    idlists.push(idlist);

    const pwdlists=JSON.parse(localStorage.getItem("pwdlists"))||[];
    console.log(pwdlists);
    pwdlists.push(pwdlist);

    //json
    const data=JSON.stringify(signlists);
    console.log(data);

    const dataid=JSON.stringify(idlists);
    console.log(dataid);

    const datapwd=JSON.stringify(pwdlists);
    console.log(datapwd);

    //localStorage에 저장
    localStorage.setItem('signlists',data);

    localStorage.setItem('idlists',dataid);
    
    localStorage.setItem('pwdlists',datapwd);
    //초기화
    document.signupFrm.reset();

    //렌더링
    renderSignlist(signlists);
};
const renderSignlist=(signlists)=>{
    if(!signlists) return;
    const tbody=document.querySelector("#sign-list tbody");
    tbody.innerHTML="";
    signlists.map((signlist,index)=>{
        const{userId,email,userName,job,datetime}=signlist;
        return`<tr>
            <td>${index+1}</td>
            <td>${userId}</td>
            <td>${email}</td>
            <td>${userName}</td>
            <td>${job}</td>
            <td>${datetimeFormatter(datetime)}</td>
        <tr>`;
    }).forEach((tr)=>{
        tbody.innerHTML+=tr;
    });
}
const datetimeFormatter=(millis)=>{
const d=new Date(millis);
const f=(n)=>n<10?'0'+n:n;//무조건10의자리 만들기위해사용
const yyyy=d.getFullYear();
const mm=f(d.getMonth()+1);
const dd=f(d.getDate());
const hh=f(d.getHours());
const mi=f(d.getMinutes());
return `${yyyy}/${mm}/${dd} ${hh}:${mi}`;
}













document.querySelector('#pwdCheck').onblur=isEqualPwd;
document.signupFrm.onsubmit=function(){
    const userId = document.getElementById("userId");
    const pwd = document.getElementById("pwd");
    const pwdCheck = document.getElementById("pwdCheck");
    const userName = document.getElementById("userName");
    const email = document.getElementById("email");

    //1. id검사 : 첫글자 영소문자, 숫자 하나이상포함
    const regExp1=/^[a-z][a-z\d]{4,12}/;
    const regExp2=/[0-9]/;
    if(!regExpTest(regExp1,userId,"아이디는 영소문자로 시작하는 4-12글자입니다."))
        return false;
    if(!regExpTest(regExp2,userId," 아이디는 숫자 하나 이상 포함해야합니다."))
        return false;

    
    //2. 비밀번호 : !@#$%^&* 포함 숫자, 문자, 특수문자가 다 들어간 8-15자리 이내 
    const regExpArr=[/^.{8,15}$/,/\d/,/[a-z]/,/[!@#$%^&*]/];
    for (let i =0;i<regExpArr.length;i++){
        if(
            !regExpTest(
                regExpArr[i],pwd,"비밀번호는 8-15자리 숫자,문자,특수문자를 포함해야 합니다."
            )
        ){
            return false;
        }
    }
    //3. 비밀번호 일치여부
    if(!isEqualPwd()){
        return false;
    }
    //4. 이름검사 : 한글 2-4글자
    const regExp3=/^[가-힣]{2,4}$/;
    if(!regExpTest(regExp3,userName,"한글 2-4글자로 입력하세요."))
        return false;

    //5. 이메일검사 - 4글자이상 @ 1글자이상(주소). 글자
    if(
        !regExpTest(
            /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/,email,"이메일 형식에 어긋납니다."
        )
    )return false;

    return true;
};

function isEqualPwd(){
    if(pwd.value==pwdCheck.value){
        return true;
    }else{
        alert("비밀번호가 일치하지 않습니다.");
        pwd.select();
        return false;
    }
}

function regExpTest(regExp,el,msg){
    if(regExp.test(el.value)) return true;

    alert(msg);
    el.value="";
    el.focus();
    return false;
}