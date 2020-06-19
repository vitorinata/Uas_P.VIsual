// Code Utama
const electron = require("electron");
const {app, BrowserWindow, Menu} = electron ;

let homeWindow;
let rumusWindow;

// Code Home On
app.on("ready", ()=> {
    homeWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title : "Aplikasi Menghitung Luas Bangun Ruang"
    });


    homeWindow.loadURL(`file://${__dirname}/home.html`);
    homeWindow.on("closed", ()=> {

        app.quit();
        homeWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

// Link Luas Jajar Genjang 
const createWindowCreatorJargenLu = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/jajargenjang.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Kubus
const rumusWindowCreatorKubus = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/kubus.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Prisma Segitiga
const rumusWindowCreatorPriseg = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/prisma_segitiga.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Tabung
const rumusWindowCreatorTabung = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/tabung.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

    
// Code Menu Template
const menuTemplate = [
    
    // Menu
    {
        label: "Menu",
        submenu: [
            { role: "reload" }, 
            { role: "toggledevtools" },
            {
                label: "Quit",
                accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl + O",
                
                click() {
                app.quit();
                }
            }
        ]
    },

    // Menu Formula
    {
        label: "Rumus",
        submenu: [
            {
                label: "1. Luas Jajar Genjang",
                
                click() {
                    createWindowCreatorJargenLu();
                }
            },
           
            {
                label: "3. Luas Kubus",
                click() {
                    rumusWindowCreatorKubus();
                }
            },
            {
                label: "4. Luas Prisma Segitiga",
                click() {
                    rumusWindowCreatorPriseg();
                }
            },
            {
                label: "5. Luas Tabung",
                click() {
                    rumusWindowCreatorTabung();
                }
            },
            
        ]
    }

]