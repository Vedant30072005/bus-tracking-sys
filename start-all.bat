@echo off
REM Start backend and frontend in separate Command Prompt windows
SET scriptDir=%~dp0


start "Backend" cmd /k "cd /d "%scriptDir%backend" && npm install && npm start"
start "Frontend" cmd /k "cd /d "%scriptDir%frontend" && npm install && npm run dev"
