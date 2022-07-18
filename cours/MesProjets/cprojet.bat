@echo off
title Creation de projet Symfony
cls
echo *****************************
echo **** Creation du dossier ****
echo *****************************
md %1
cd %1

md \css
md \img
md \js

copy c:\users\lenovo\documents\copyfiles\* c:\users\lenovo\documents\projetsvsc\%1

echo *****************************
echo **** Lancement de VSCode ****
echo *****************************

echo **************************************
echo **** Operation ok le : %date% ****
echo **************************************

code .
cls