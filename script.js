
const blockList = document.getElementById('block-list')
const codeView = document.getElementById('codeView')






const codeBlocks = [
    [   
        ['group','motion'],
        ['text','set x'],
        ['VarB','number','x'],
        ['text',' and y'],
        ['VarB','number','y'],
        ['code',`function()`]
    ],
    [
        ['group','event'],
        ['text','set x'],
        ['block','calc','oper'],
        ['code',`function()`]
    ],
    [
        ['group','operate'],
        ['text','number'],
        ['VarB','number','num']
    ]
]


function addBlocks(){
    for(let i=0;i<codeBlocks.length;i++){
        const item = document.createElement('div')
        item.draggable=true
        item.classList.add('Block')
        item.dataset.type = 'full'
        for(let w=0;w<codeBlocks[i].length;w++){
            if(codeBlocks[i][w][0]=='group'){
                item.classList.add(codeBlocks[i][w][1])
            }
            if(codeBlocks[i][w][0]=='text'){
                const ele = document.createElement('a')
                ele.textContent = codeBlocks[i][w][1]
                item.appendChild(ele)
            }
            else if(codeBlocks[i][w][0]=='VarB'){
                const ele = document.createElement('input')
                ele.type = codeBlocks[i][w][1]
                item.appendChild(ele)
            }
            else if(codeBlocks[i][w][0]=='block'){
                const sack = document.createElement('div')
                if (codeBlocks[i][w][1]=='calc'){
                    sack.className = 'emptyRoundSpace'
                    sack.classList.add('slot')
                }
                else if (codeBlocks[i][w][1]=='void'){
                    sack.className = 'emptySquareSpace'
                    sack.classList.add('slot')
                }
                item.appendChild(sack)
            }
            else if(codeBlocks[i][w][0]=='code'){
                item.dataset.code = codeBlocks[i][w][1]
            }
        }
        blockList.appendChild(item)
        item.addEventListener('dragstart', (e) => {
            block = item
        })

    }
}

codeView.addEventListener('drop', (e) => {
    e.preventDefault()
    e.stopPropagation()
    if(block){
        const blork = block.cloneNode(true)
        const blk = blork.querySelector('.slot')
        codeView.appendChild(blork)
        blk.addEventListener('dragover', (e) => {
            e.preventDefault()
            e.stopPropagation()
        })

        blk.addEventListener('drop', (e) => {
            e.preventDefault()
            e.stopPropagation()
            if(block){
                const newblk = block.cloneNode(true)
                blk.appendChild(newblk)
            }
        })
    }  
})

codeView.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.stopPropagation()
})

codeView.addEventListener('dragleave', e => {
        e.stopPropagation()})



addBlocks()