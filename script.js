
const blockList = document.getElementById('block-list')

function addBlock(content,code,type,input=null){
    const codeBlock = document.createElement('div')
    codeBlock.draggable=true
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


const blocks = {
    eventBlocks: {
        'When Game Starts': [
        `function onStart(){\n    // Code here\n}`,
    ],
    'When Key Clicked': [
        `keyboard.onclick(key){\n    // Code here\n}`,
        'key'
    ],
    'When Sprite Clicked': [
        `sprite.onClick(){\n    // Code here\n}`
    ],
    'When Message Received': [
        `onMessage(message){\n    // Code here\n}`,
        'message'
    ],
    'Broadcast Message': [
        `broadcast(message);`,
        'message'
    ],
    'Broadcast and Wait': [
        `broadcastAndWait(message);`,
        'message'
    ],
    'When Timer > Value': [
        `whenTimerGreaterThan(value){\n    // Code here\n}`,
        'value'
    ]
    },

    controlBlocks: {
    'Wait Seconds': [
        `wait(seconds);`,
        'seconds'
    ],
    'Repeat Times': [
        `for (let i = 0; i < times; i++) {\n    // Code here\n}`,
        'times'
    ],
    'Forever': [
        `while (true) {\n    // Code here\n}`
    ],
    'If Condition': [
        `if (condition) {\n    // Code here\n}`,
        'condition'
    ],
    'If Else Condition': [
        `if (condition) {\n    // Code here\n} else {\n    // Else code here\n}`,
        'condition'
    ],
    'Wait Until Condition': [
        `while (!condition) {\n    // waiting\n}\n// Code here`,
        'condition'
    ],
    'Repeat Until Condition': [
        `while (!condition) {\n    // Code here\n}`,
        'condition'
    ],
    'Stop All': [
        `stopAll();`
    ]
    },
    motionBlocks:{
    'Move Steps': [
        `move(steps);`,
        'steps'
    ],
    'Turn Right Degrees': [
        `turnRight(degrees);`,
        'degrees'
    ],
    'Turn Left Degrees': [
        `turnLeft(degrees);`,
        'degrees'
    ],
    'Go To X Y': [
        `goTo(x, y);`,
        ['x', 'y']
    ],
    'Glide To X Y': [
        `glideTo(x, y, seconds);`,
        ['x', 'y', 'seconds']
    ],
    'Point In Direction': [
        `pointInDirection(angle);`,
        'angle'
    ],
    'Point Towards Sprite': [
        `pointTowards(spriteName);`,
        'spriteName'
    ],
    'Change X By': [
        `changeXBy(value);`,
        'value'
    ],
    'Set X To': [
        `setXTo(value);`,
        'value'
    ],
    'Change Y By': [
        `changeYBy(value);`,
        'value'
    ],
    'Set Y To': [
        `setYTo(value);`,
        'value'
    ],
    'If On Edge, Bounce': [
        `ifOnEdgeBounce();`
    ],
    'Set Rotation Style': [
        `setRotationStyle(style);`,
        'style'
    ]
    },
    looksBlocks: {
    'Say Text': [
        `say(text);`,
        'text'
    ],
    'Say Text For Seconds': [
        `sayFor(text, seconds);`,
        ['text', 'seconds']
    ],
    'Think Text': [
        `think(text);`,
        'text'
    ],
    'Think Text For Seconds': [
        `thinkFor(text, seconds);`,
        ['text', 'seconds']
    ],
    'Change Costume To': [
        `setCostume(name);`,
        'name'
    ],
    'Next Costume': [
        `nextCostume();`
    ],
    'Change Size By': [
        `changeSizeBy(value);`,
        'value'
    ],
    'Set Size To': [
        `setSizeTo(value);`,
        'value'
    ],
    'Show': [
        `show();`
    ],
    'Hide': [
        `hide();`
    ],
    'Go To Front Layer': [
        `goToFront();`
    ],
    'Go Back Layers': [
        `goBackLayers(value);`,
        'value'
    ]
    },
    soundBlocks: {
    'Play Sound': [
        `playSound(name);`,
        'name'
    ],
    'Play Sound Until Done': [
        `playSoundUntilDone(name);`,
        'name'
    ],
    'Stop All Sounds': [
        `stopAllSounds();`
    ],
    'Change Volume By': [
        `changeVolumeBy(value);`,
        'value'
    ],
    'Set Volume To': [
        `setVolumeTo(value);`,
        'value'
    ],
    'Change Pitch Effect By': [
        `changePitchBy(value);`,
        'value'
    ],
    'Clear Sound Effects': [
        `clearSoundEffects();`
    ]
    },
    inputBlocks: {
    'Ask And Wait': [
        `ask(question);`,
        'question'
    ],
    'Answer': [
        `getAnswer();`
    ],
    'Key Pressed?': [
        `isKeyPressed(key);`,
        'key'
    ],
    'Mouse Down?': [
        `isMouseDown();`
    ],
    'Mouse X': [
        `mouseX();`
    ],
    'Mouse Y': [
        `mouseY();`
    ],
    'Set Drag Mode': [
        `setDragMode(mode);`,
        'mode'
    ],
    'Touching Sprite?': [
        `isTouching(spriteName);`,
        'spriteName'
    ]
    },
    operateBlocks: {
    'Add': [
        `(a + b)`,
        ['a', 'b']
    ],
    'Subtract': [
        `(a - b)`,
        ['a', 'b']
    ],
    'Multiply': [
        `(a * b)`,
        ['a', 'b']
    ],
    'Divide': [
        `(a / b)`,
        ['a', 'b']
    ],
    'Pick Random': [
        `random(min, max);`,
        ['min', 'max']
    ],
    'Greater Than': [
        `(a > b)`,
        ['a', 'b']
    ],
    'Less Than': [
        `(a < b)`,
        ['a', 'b']
    ],
    'Equals': [
        `(a == b)`,
        ['a', 'b']
    ],
    'And': [
        `(a && b)`,
        ['a', 'b']
    ],
    'Or': [
        `(a || b)`,
        ['a', 'b']
    ],
    'Not': [
        `(!a)`,
        'a'
    ],
    'Join Text': [
        `join(text1, text2);`,
        ['text1', 'text2']
    ],
    'Letter Of Text': [
        `letterOf(position, text);`,
        ['position', 'text']
    ],
    'Length Of Text': [
        `lengthOf(text);`,
        'text'
    ],
    'Contains?': [
        `contains(text, part);`,
        ['text', 'part']
    ],
    'Modulo': [
        `(a % b)`,
        ['a', 'b']
    ],
    'Round': [
        `round(value);`,
        'value'
    ]
    },
    variableBlocks: {
    'Set Variable To': [
        `setVariable(name, value);`,
        ['name', 'value']
    ],
    'Change Variable By': [
        `changeVariableBy(name, value);`,
        ['name', 'value']
    ],
    'Show Variable': [
        `showVariable(name);`,
        'name'
    ],
    'Hide Variable': [
        `hideVariable(name);`,
        'name'
    ],
    'Read Variable': [
        `getVariable(name);`,
        'name'
    ]
    },
    functionBlocks: {
    'Define Function': [
        `function name(){\n    // Code here\n}`,
        'name'
    ],
    'Call Function': [
        `name();`,
        'name'
    ],
    'Return Value': [
        `return value;`,
        'value'
    ],
    'Define Function With Params': [
        `function name(param1, param2){\n    // Code here\n}`,
        ['name', 'param1', 'param2']
    ],
    'Call Function With Params': [
        `name(param1, param2);`,
        ['name', 'param1', 'param2']
    ]
} 
};


let currentBlockType = 'event'
document.getElementById(currentBlockType+'btn').style.backgroundColor = '#ccccccff'

function changeBlockType(type){
    document.getElementById(currentBlockType+'btn').style.backgroundColor = 'rgba(126, 126, 126, 0)'
    currentBlockType = type
    document.getElementById(currentBlockType+'btn').style.backgroundColor = '#ccccccff'

    blockList.innerHTML=''
    for (let key in blocks[type+'Blocks']) {
        const [code, input] = blocks[type+'Blocks'][key];
        addBlock(key, code, type, input);
    }

}

changeBlockType('event')