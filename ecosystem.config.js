 module.exports = {
     apps: [
 {
        name: 'bp_landing_art_app',
        script: 'npm',
        args: "start -- --port 3014",
        instances: 1,
        autorestart: true,
    },

     ],
 };