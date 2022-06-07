const check_1=document.querySelector("#login1");
const check_id=check_1.querySelector("input");
const check_2=document.querySelector("#login2");
const check_password=check_2.querySelector("input");
const loginBtn=document.querySelector(".loginbutton");
const clearBtn=document.querySelector(".Clearbutton");

function CheckValue(){
    const ID=check_id.value;
    const PASSWORD=check_password.value;

    if(localStorage.getItem(ID)==PASSWORD){
        alert("회원가입을 축하합니다.");
    }else{
        alert("아이디 또는 비밀번호가 틀렸거나 존재하지않습니다.");
    }
}

function clearLocal(){
    localStorage.clear();
}
function init(){
    loginBtn.addEventListener("click",CheckValue);
    clearBtn.addEventListener("click",clearLocal);
}