# Start both backend and frontend in separate PowerShell windows
# Usage: Right-click -> Run with PowerShell, or execute in PowerShell: .\start-all.ps1

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Start backend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$scriptDir\\backend'; npm install; npm start"

# Start frontend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$scriptDir\\frontend'; npm install; npm run dev"
