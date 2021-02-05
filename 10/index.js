const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked=true;
            }
        });

    }

    lastChecked = this;
    
}

//체크박스에 체크하는 이벤트가 발생했을 때. click으로 한 이유는 키보드로도 조작하기 위해서
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));



//문제점
    // 첫번째 체크에서 shift를 누르고 하면 두번째 체크를 하지 않았음에도 
    // 첫번째 체크 밑으로 전체 선택되어 체크됨
        // if(e.shiftKey && this.checked) 를
        // if(e.shiftKey && lastChecked.checked) 로 바꾸어 해결

    // 체크를 해제하는 것은 쉬프트로 전체 선택이 안됨