
const blockList = document.getElementById('block-list')

function addBlock(content,code,type,input=null){
    const codeBlock = document.createElement('div')
    codeBlock.className = 'Block'
    codeBlock.classList.add(type)
    const txt = document.createElement('a')
    txt.textContent = content
    codeBlock.appendChild(txt)

    blockList.appendChild(codeBlock)
    
    if (input==null){}
    else{ console.log(999)
        const inputField = document.createElement('input')
        if(input=='text'){
            inputField.type='text'
        }
        else{
            inputField.type='number'
        }
        inputField.textContent = '0'
        codeBlock.appendChild(inputField)
    }

}
addBlock('Set x to','dyygsryts','function','text')
