module.exports = {
  apps: [
    {
      name: 'bp_landing_art_app',
      script: 'npm',
      args: "start -- --port 3010",
      instances: 1,
      autorestart: true,
    },
  ],
};
