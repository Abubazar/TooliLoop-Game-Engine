
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
        for(let w=0;w<codeBlocks[i].length;w++){
            if(codeBlocks[i][w][0]=='group'){
                item.classList.add(codeBlocks[i][w][1])
                console.log(22)
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
                }
                else if (codeBlocks[i][w][1]=='void'){
                    sack.className = 'emptySquareSpace'
                }
                item.appendChild(sack)
                sack.addEventListener('dragover', (e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    e.target.closest()
                    console.log(2227328327782)
                })

                sack.addEventListener('drop', (e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    e.target.closest()
                    if(block){
                        const blk = block.cloneNode(true)
                        sack.appendChild(blk)
                    }
                })
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
    e.target.closest()
    if(block){
        const blk = block.cloneNode(true)
        codeView.appendChild(blk)
    }
})

codeView.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.target.closest()
})



addBlocks()