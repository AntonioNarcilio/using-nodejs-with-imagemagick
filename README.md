<p align="center">
Criando um wallpaper simples com efeito blur, utilizando imagemagick junto com node.js

<br/>
<br/>

<a href="https://nodejs.org/en/">
 <img alt="Node js" title="node js" src="https://img.shields.io/static/v1?label=node%20js&message=javascript%20runtime%20environment&color=FEF88A&labelColor=535CD8&style=flat&logo=node.js&logoColor=white" />
</a>

<a href="https://imagemagick.org">
 <img alt="ImageMagick" title="ImageMagick" src="https://img.shields.io/static/v1?label=image%20magick&message=command-line%20image%20editor&color=FEF88A&labelColor=535CD8&style=flat&logo=data:image/png;base64,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&logoColor=white" />
</a>


<img alt="GitHub repo size" title="GitHub repo size" src="https://img.shields.io/github/repo-size/AntonioNarcilio/imagemagick-effect-blur?color=FEF88A&labelColor=535CD8&logo=GitHub&logoColor=white" />

<a href="https://github.com/AntonioNarcilio/imagemagick-effect-blur/blob/master/LICENSE">
 <img src="https://img.shields.io/github/license/AntonioNarcilio/imagemagick-effect-blur?label=license&color=FEF88A&labelColor=535CD8" alt="license"/>
</a>

<img alt="GitHub last commit" title="GitHub last commit" src="https://img.shields.io/github/last-commit/AntonioNarcilio/imagemagick-effect-blur?&color=FEF88A&labelColor=535CD8" />

<img alt="GitHub language coun" title="GitHub language coun" src="https://img.shields.io/github/languages/count/AntonioNarcilio/imagemagick-effect-blur?&color=FEF88A&labelColor=535CD8" />

<img alt="GitHub top language" title="GitHub top language" src="https://img.shields.io/github/languages/top/AntonioNarcilio/imagemagick-effect-blur?&color=FEF88A&labelColor=535CD8" />

</p>

</br>

<h4 align="center"><b>Imagem Original</b></h4>
<img src="./.github/original.png" style="width:100%">

<h4 align="center"><b>Imagem Convertida</b></h4>
<img src="./.github/original-converted.png" style="width:100%;">


</br>
</br>

> ⚠ **Atenção**: Antes de prosseguir com o passo a passo descrito abaixo, você precisa ter instalado em sua máquina o [Node Js](https://nodejs.org/en/download/) o [ImageMagick](https://imagemagick.org/script/download.php) e caso queira, o gerenciador de pacote [Yarn](https://yarnpkg.com/getting-started/install).
<br>
Se não for o seu caso 😎 então você já pode prosseguir 👍

---

<br/>

## **Clonando o repositório**
Antes você deve clonar este repositório. E para isso existe diversas formas de se fazer.

1. Clonando via `https`:
	> Execute no terminal
	~~~bash
	git clone https://github.com/AntonioNarcilio/imagemagick-effect-blur.git
	~~~

2. Clonando via `ssh` *preferencialmente**:
	> Execute no terminal
	~~~bash
	git clone git@github.com:AntonioNarcilio/imagemagick-effect-blur.git
	~~~

3. Baixando arquivo `.zip` 
	> Basta clicar la no inicio da pagina no botão <kbd>code</kbd> e depois em <kbd>Download ZIP</kbd>
	>ou basta clicar [Aqui](https://github.com/AntonioNarcilio/imagemagick-effect-blur/archive/main.zip)

	>Ai é so descompactar o arquivo `.zip` que você verá uma pasta com o nome do repositório `imagemagick-effect-blur`.

<br/>

---

## **Criando o wallpaper**

Dentro do diretório/pasta criado ao clona/baixar. Mova a(s) imagem(ns) que deseja criar o(s) *"wallpaper(s)"* para o diretório <kbd>public</kbd> / <kbd>img-original</kbd>, e então siga um dos passos a passo descrito abaixo 👇.

<br/>

#### **1️⃣ Executando aplicação via script**

Na pasta raiz da aplicação encontra-se um arquivo chamado `RUN_App.sh`, antes de executar o script dê permissão de execução para o mesmo, então abra o terminal no diretório onde se encontra o arquivo e execute o comando.

~~~bash
chmod +x RUN_App.sh
~~~

E então execute-o com duplo clique o script `RUN_App` 

<br/>

---

<br/>

#### **2️⃣ Executando aplicação via terminal >_**

Se preferir abra o terminal no diretório raiz da aplicação e execute o comando

~~~bash
npm run start
~~~
> ou

~~~bash
yarn run start
~~~

<br/>

---

<br/>

Pronto se tudo ocorrer conforme o 🙌 esperado 🎊 a imagem editada será salva no diretório 🗂 <kbd>public</kbd> / <kbd>img-edited</kbd> 

<br/>

>Se assim como eu, você é utilitário do KDE com interface `plasma` então ao executar o script `RUN_App.sh` aparecerá uma simples mensagem popup informando que a(s) imagem(ns) foi/foram editada(s) ...
<img src="./.github/kdialog.png">

<br/>
<br/>

Created with ❤ by **Antônio Narcilio**