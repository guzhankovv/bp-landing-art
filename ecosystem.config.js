module.exports = {
  apps: [
    {
      name: 'bp_landing_art_app',
      script: 'npm',
      args: "run start",
      instances: 1,
      autorestart: true,
    },

  ],
};
