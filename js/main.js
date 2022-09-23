const editor = grapesjs.init({
    container: "#editor",
    fromElement: true,
    width: "auto",
    StorageManager:"false",
    blockManager: {
        appendTo: "#blocks",
    },
    styleManager: {
        appendTo: "#styles-container",
        sectors:[
            {
                name:"Dimension",
                open:false,
                buildProps: ["width","min-height","padding"],
                properties: [
                    {
                        type:"integer",
                        name:"The Width",
                        property:"width",
                        units:["px","%","rem"],
                        defaults:"auto",
                        min: 0,
                    },
                ],
            },
        ],
    },
    layerManager: {
        appendTo: "#layers-container",
    },
    traitManager:{
        appendTo:"#trait-container"
    },
    selectorManager: {
        appendTo: "#styles-container",
    },
    panels: {
        defaults: [
            {
                id:"basic-actions",
                el:".panel__basic-action",
                buttons:[
                    {
                        id:"visibility",
                        active:true, //active by default
                        className:"btn-toggle-borders",
                        label:'<i class="fa fa-clone"></i>',
                        command:"sw-visibility", //build in command
                    },
                ],
            },
            {
                id:"panel-devices",
                el:".panel__devices",
                buttons:[
                    {
                        id:"device-dekstop",
                        label:"<i class='fa fa-television'></i>",
                        command:"set-device-dekstop",
                        active:true,
                        togglable:false,
                    },
                    {
                        id:"device-mobile",
                        label:"<i class='fa fa-mobile'></i>",
                        command:"set-device-mobile",
                    },
                ],
            }
        ],
    },
    deviceManager:{
        devices: [
            {
                name:"Dekstop",
                width:"",
            },
            {
                name:"Mobile",
                width:"320px",
                widthMedia:"480px"
            },
        ],
    },
    plugins:["gjs-blocks-basic"],
    pluginsOpts: {
        "gjs-blocks-basic": {},
    },
});

// Add command to switch the view for dekstop/large screen 
editor.Commands.add("set-device-dekstop", {
    run: (editor) => editor.setDevice("Dekstop")
});

// Add command to switch the view for mobile device 
editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile")
});