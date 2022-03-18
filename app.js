const app = document.querySelector('#app');
const delay = (ms) => new Promise(res => setTimeout(res, ms));

const commands = ['projects', 'about me', 'social -a', 'clear'];

const terminalInit = async () => {
    await delay (500);
    renderMessage("Welcome")
    await delay(1000);
    renderMessage("Starting the server ...")
    await delay(1000)
    renderMessage("You can run several commands");
    introCommands();
    await delay(300);
    pwd();
    await delay (150)
    renderInput();
    console.log(commands);
    
}
const introCommands = () => {
    renderCommandMessage("about me", "Who am i and what do i do.")

    renderCommandMessage("all", "See all commands.")

    renderCommandMessage("social -a", "All my social networks.")
}

const renderMessage = (msg, html) => {
    if(!msg) {
        app.insertAdjacentHTML('beforeend', html);
        return;
    }
    const div = document.createElement('div');
    div.classList.add("message");

    const p = document.createElement('p');
    p.textContent = msg;

    div.appendChild(p);
    app.appendChild(div);
}

const renderCommandMessage = (cmd, msg) => {
    // Creating div for command
    const commandDiv = document.createElement('div');
    commandDiv.classList.add("command");
    const commandP = document.createElement('p');
    commandP.textContent = cmd;

    commandDiv.appendChild(commandP);

    app.appendChild(commandDiv);
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add("message");
    messageDiv.classList.add("cmd-msg");

    const messageP = document.createElement('p');

    messageP.textContent = msg;

    messageDiv.appendChild(messageP);

    app.appendChild(messageDiv);
}

const pwd = () => {
    const html = `
        <div class = "path">
            <p>
                # user
                <span>in</span>
                <span>~/safin-ahmed</span>
            </p>
        </div>
    `;

    app.insertAdjacentHTML('beforeend', html);
}

const renderInput = () => {
    const html = `
        <div class = "type">
        <i class="fa-solid fa-angle-right"></i>
        <input id="type-box">
        </div>
    `
    app.insertAdjacentHTML('beforeend', html);
    const input = document.querySelector('#type-box');
    input.addEventListener('keypress', function(e){
        if(e.key === 'Enter'){
            const cmd = input.value;
            delay(150);
            handleCommands(cmd);
        };
    });
}


// Handle Commands and Errors 

const handleCommands = (cmd) => {
    const check = checkCommand(cmd);
    if(!check) {
        renderError(cmd);
    }
    renderSuccess(cmd);
    executeCommand(cmd);
}

// Check if the command from input is present in commands array

const checkCommand = (cmd) => {
    if(!commands.includes(cmd)){
        return false;
    }
    return true;
}

// Render Error 

const renderError = (cmd) => {
    document.querySelector('.type').classList.add('error');
    document.querySelector('.type').classList.remove('success');
    renderMessage(`Command not found: ${cmd}`)
}

// Render Success 

const renderSuccess = (cmd) => {
    document.querySelector('.type').remove();
    const html = `
    <div class = "type2">
    <i class="fa-solid fa-angle-right"></i>
    <h2 class="message success">${cmd}</h2>
    </div>
    `
    app.insertAdjacentHTML('beforeend', html);
}

// Execute Command 

const executeCommand = (cmd) => {
    if(cmd === commands[0]) {
        renderMessage(false, `
            <div class = "message">
            <a href="https://github.com/Safin-Ahmed"><h1><i class="fa-brands fa-github"></i>github.com/Safin-Ahmed</h1></a>
            </div>
        `)
    }

    pwd();
    renderInput();
}

terminalInit();