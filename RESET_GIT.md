# How to Disconnect from GitHub

Since I cannot execute terminal commands on your machine, you must run one of the following commands in your project folder to disconnect from GitHub.

### Option 1: Completely Remove Git (Fresh Start)
Use this to remove all version control history and make this a regular folder again.

**Windows (Command Prompt):**
```cmd
rmdir /s /q .git
```

**Mac / Linux / Git Bash:**
```bash
rm -rf .git
```

### Option 2: Unlink Repository Only
Use this to keep your commit history but remove the link to the specific GitHub repository.

```bash
git remote remove origin
```

### Next Steps
After running the command above, you can initialize a new repository if you wish:

```bash
git init
git add .
git commit -m "Initial commit of Sally Electronics"
```
