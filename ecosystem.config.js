module.exports = {
    apps: [
      {
        name: "frontend",
        cwd: "./frontend",
        script: "npm",
        args: "run dev",
        autorestart: true,
        watch: false,
        max_memory_restart: "1G",
      },
      {
        name: "server",
        cwd: "./server",
        script: "npm",
        args: "start",
        autorestart: true,
        watch: false,
        max_memory_restart: "1G",
      },
    ],
  }
  