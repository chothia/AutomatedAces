:: AutomatedAces Start Batch File
:: Written by Keanu73, at 13:55 GMT
@echo off
title Run AutomatedAces
color 0A
:MENU
cls
echo Run AutomatedAces
echo ===================
echo Choose your choice:
echo ===================
echo 1) Run
echo 2) Exit
echo =========
set input=
set /p input=Choice: 
if %input%==1 goto :RUN
if %input%==2 goto :EXIT

:RUN
cls
echo Starting to run..
node automatedaces.js
pause

:EXIT
cls
echo Thank you for using this batch file!
echo ====================================
echo Credits:
echo AcesWayUpHigh - Repoistory Maintainer
echo Keanu73 - JavaScript Programmer and Coder
echo JohnMHarrisJr - JavaScript Programmer and Coder
echo ====================================
echo Do you want to exit now(y/n)?
echo =============================
set input=
set /p input=
if %input%==y exit
if %input%==n goto :MENU
