const terminal = document.querySelector(".terminal");
const base = `vugiabao@<span style="color: lightgreen">rin</span>:<span style="color: dodgerblue">~</span>$ `;
let array = [];
let input = "";
let lastIdx = -1;
let lastCmd = "";
let index = 0;
let sw = true;

function updateConsole() {
    document.querySelector(".new-line").innerHTML = sw ? (index === 0 ? base + input + "|" : base + input.slice(0, index) + "|" + input.slice(index)) : base + input;
}

document.addEventListener("keydown", function (e) {
    e || window.event;
    const key = e.key;
    if ((e.metaKey || e.ctrlKey) && e.key === "v" && (navigator.userAgent.search("Firefox") === -1)) {
        navigator.clipboard.readText().then(function (text) {
            if (text === "" || text.trim().length === 0)
                return;
            if (index === 0)
                input += text;
            else
                input = input.slice(0, index) + text + input.slice(index);
            updateConsole();
        });
        e.preventDefault();
        return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey)
        return;
    if (input.length + index <= 0)
        index = -input.length;
    if (index > 0)
        index = 0;
    if (key.length === 1) {
        if (index === 0)
            input += key;
        else
            input = input.slice(0, index) + key + input.slice(index);
        updateConsole();
        e.preventDefault();
        return;
    }
    switch (key) {
        case "Enter":
            let success = input.length !== 0;
            if (success) {
                const args = input.trim().split(' ');
                console.log(args);
                console.log(args.length);
                let cmd = null;
                if (args.length > 1) {
                    cmd = args.join(' ')?.toString();
                } else {
                    cmd = args.shift()?.toString();
                }
                switch (cmd) {
                    case "clear":
                        clear();
                        break;
                    case "info":
                        info();
                        break;
                    case "help":
                        help();
                        break;
					case "sex":
						sex();
						break;
					case "pornhub":
						pornhub();
						break;
					case "girlfriend":
						girlfriend();
						break;
					case "hentaivn":
						hentaivn();
						break;		
                    default:
                        success = false;
                        writeLine(`zsh: command not found: ${cmd}`);
                        break;
                }
            }
            switchToNewLine(success);
            terminal.scrollTop = terminal.scrollHeight - terminal.clientHeight;
            break;
        case "Backspace":
            if (input.length <= 0)
                return;
            if (index === 0)
                input = input.slice(0, -1);
            else
                input = input.slice(0, index - 1) + input.slice(index);
            updateConsole();
            break;
        case "Delete":
            if (input.length <= 0 || index === 0)
                return;
            input = input.slice(0, index) + (index === -1 ? '' : input.slice(index + 1));
            index = index >= 0 ? 0 : index + 1;
            updateConsole();
            break;
        case "ArrowLeft":
            if (input.length === 0 || input.length + index <= 0)
                index = -input.length;
            else
                index--;
            updateConsole();
            break;
        case "ArrowRight":
            index = index >= 0 ? 0 : index + 1;
            updateConsole();
            break;
        case "ArrowUp":
            if (array.length === 0)
                return;
            if (lastIdx === -1) {
                lastIdx = array.length;
                lastCmd = input;
            }
            lastIdx--;
            if (lastIdx <= 0)
                lastIdx = 0;
            input = array[lastIdx];
            updateConsole();
            break;
        case "ArrowDown":
            if (lastIdx === -1)
                return;
            lastIdx++;
            if (lastIdx >= array.length) {
                lastIdx = -1;
                input = lastCmd;
                return;
            }
            input = array[lastIdx];
            updateConsole();
            break;
    }
    e.preventDefault();
}, false);
inputLine("info");
info();
switchToNewLine(true);
setInterval(function update() {
    if (index === 0)
        sw = !sw;
    else
        sw = true;
    updateConsole();
    return update;
}(), 500);
function switchToNewLine(success) {
    if (input.length !== 0)
        array.push(input);
    lastIdx = -1;
    input = "";
    const elem = document.querySelector(".new-line");
    if (elem) {
        if (success)
            elem.style.paddingBottom = "5px";
        elem.classList.remove("new-line");
        if (elem.innerHTML.endsWith("|"))
            elem.innerHTML = elem.innerHTML.slice(0, -1);
    }
    index = 0;
    inputLine();
}
function print404() {
    const elem = document.querySelector(".new-line");
    elem.classList.remove("new-line");
    if (elem.innerHTML.endsWith("|"))
        elem.innerHTML = elem.innerHTML.slice(0, -1);
    elem.innerHTML += "urmomgay";
    writeLine(`zsh: <span>404</span> - Page not found. Redirected to the main page in <span>24h</span>.......`);
    inputLine("./main");
    switchToNewLine();
}
function inputLine(text) {
    terminal.innerHTML += `\n<div class=\"new-line\">vugiabao@<span style=\"color: lightgreen\">rin</span>:<span style=\"color: dodgerblue\">~</span>$ ${text ? text : ''}</div>`;
}
function writeLine(text) {
    terminal.innerHTML += `<div>${text}</div>`;
}
function clear() {
    terminal.innerHTML = "";
}
function info() {
    terminal.innerHTML += "\n<img alt=\"icon\" class=\"img\" src=\"https://i.ibb.co/GT7rQtt/Cirno-600-1841124-removebg-preview.png\">\n" +
        "  <div id='terminalSpanText'><span id='terminalSpanText'>vugiabao</span>@<span>rin</span></div>\n" +
        "  <div>---------------------</div>\n" +
        "  <div><span id='terminalSpanText'>OS</span>: Windows 10</div>\n" +
        "  <div><span id='terminalSpanText'>Nickname</span>: rin </div>\n" +
        "  <div><span id='terminalSpanText'>Interested</span>: games</div>\n" +
        "  <div><span id='terminalSpanText'>Ages</span>: 14 </div>\n" +
        "  <div><span id='terminalSpanText'>Github</span>: <a href=\"https://github.com/thamturin\" target='_blank'>thamturin</a></div>\n" +
        "  <div> <span id='terminalSpanText'>Facebook </span> : <span id='terminalHelpText'> <a href=\"https://facebook.com/rinnotfoundlol/\" target='_blank'>bam vo la thanh ny</a> \n</span></div>\n" +
        "  <div><span id='terminalSpanText'>Youtube</span>: <a href=\"https://www.youtube.com/channel/@thamturin\" target='_blank'>click here</a></div>\n" +
        "  <div style=\"clear: both;\">";
}

function help() {
    terminal.innerHTML +=
        "  <div>---------------------</div>\n" +
        "  <div><span id='terminalHelpText'>info, clear, sex, pornhub, girlfriend, hentaivn\n</span></div>\n" +
        "  <div>---------------------</div>\n" +
        "  <div style=\"clear: both;\">";}

function sex() {
    terminal.innerHTML +=
        "  <div><span id='terminalHelpText'>wtf og can xem sex thi len google ma tim???\n</span></div>\n" +
        "  <div style=\"clear: both;\">";}		

function pornhub() {
    terminal.innerHTML +=
        "  <div><span id='terminalHelpText'>truy cap pornhub.com\n</span></div>\n" +
        "  <div style=\"clear: both;\">";}
		
function girlfriend() {
    terminal.innerHTML +=
        "  <div><span id='terminalHelpText'>muon lm ny tui ha, vao fb nch nhe!\n</span></div>\n" +
        "  <div style=\"clear: both;\">";}	

function hentaivn() {
    terminal.innerHTML +=
        "  <div><span id='terminalHelpText'>discord.gg/hvn va hentaivn.autos\n</span></div>\n" +
        "  <div style=\"clear: both;\">";}		