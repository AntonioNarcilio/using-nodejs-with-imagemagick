### Criando um wallpaper simples com efeito blur utilizando imagemagick junto com node.js

<p align="center">
<a href="https://nodejs.org/en/">
 <img alt="Node js" title="node js" src="https://img.shields.io/static/v1?label=node%20js&message=javascript%20runtime%20environment&color=FEF88A&labelColor=535CD8&style=flat&logo=node.js&logoColor=white" />
</a>

<a href="https://imagemagick.org">
 <img alt="ImageMagick" title="ImageMagick" src="https://img.shields.io/static/v1?label=image%20magick&message=command-line%20image%20editor&color=FEF88A&labelColor=535CD8&style=flat&logo=image/png;base64,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&logoColor=white" />
</a>

</p>

</br>

<h4 align="center"><b>Imagem Original</b></h4>
<img src="./.github/original.jpg" style="width:100%; border: 2px solid black; border-radius: 8px;">

<h4 align="center"><b>Imagem Convertida</b></h4>
<img src="./.github/original-converted.png" style="width:100%; border: 2px solid black; border-radius: 8px;">


</br>
</br>


Mova a(s) imagem(ns) que deseja criar o(s) *"wallpaper(s)"* para o diretório <kbd>public</kbd> / <kbd>img-original</kbd>, e então siga um dos passos a passo descrito abaixo 👇.

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