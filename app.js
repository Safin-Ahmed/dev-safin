const app = document.querySelector('#app');
const delay = (ms) => new Promise(res => setTimeout(res, ms));

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

    
}
const introCommands = () => {
    renderCommandMessage("about me", "Who am i and what do i do.")

    renderCommandMessage("all", "See all commands.")

    renderCommandMessage("social -a", "All my social networks.")
}

const renderMessage = msg => {
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

terminalInit();