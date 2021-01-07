#!/bin/bash


runApp() {
	echo `npm run start`
}


endScript() {
	messageTitle='Imagem(ns) 🖼 convertida(s) 🎉'
	messagePopUp='Salva(s) no 📁 diretório 👇\npublic/img-edited'

	kdialog --title "$messageTitle" --passivepopup "$messagePopUp" 7
}

# Chamando funções
runApp
endScript