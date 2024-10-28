#!/bin/sh
npx tsc  # Compila o TypeScript para JavaScript

if [ $? != 0 ]; then
  echo "Ocorreu um erro ao compilar o TypeScript, verifique seu código e tente novamente"
  exit 1
fi
