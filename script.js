
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
        ['group','motion'],
        ['text','set x'],
        ['VarB','number','x'],
        ['text',' and y'],
        ['VarB','number','y'],
        ['code',`function()`]
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
            else if(codeBlocks[i][w][0]=='code'){
                item.dataset.code = codeBlocks[i][w][1]
            }
        }
        blockList.appendChild(item)
        item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.dataset.code);
    });

    }
}

codeView.addEventListener('drop', (e) => {
    e.preventDefault();
    console.log(67674756)
});

codeView.addEventListener('dragover', (e) => {
    e.preventDefault()
});



addBlocks()