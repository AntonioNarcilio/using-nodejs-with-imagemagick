import gm from 'gm';
import fs from 'fs';
const GM = gm.subClass({imageMagick: true});


export function creatingBackgroundWithBlurEffect (dirOriginalFile, dirSaveFile) {

	fs.readdir(dirOriginalFile, (error, files) => {

		// 📝erro de manipulação
		if (error) {
			return console.log('⚠️  Não foi possível verificar o diretório:\n' + error)
		}
		
		files.map((file) => {

			// 📝 verificando o tipo de arquivo
			let extension = file.split('.').pop()

		
			if ( extension == 'jpg' || extension == 'jpeg' || extension == "png" ) {
				
				// 📝 Tamanho do background
				const width = 1920
				const height = 1080

				// 📝 Removendo extensão
				let inputFileName = file.split('.').shift()
				// 📝 Adicionando sufixo ao arquivo que será alterado
				let outputFileName = inputFileName + "-converted.png"

				GM()
					.in(dirOriginalFile + file)
					
					.out('(')
					.out('-clone')
					.out('0')
					.out('-background', 'white')
					.out('-blur', '0x8')
					.out('-resize', `${width}x${height}^`)
					.out(')')

					.out('(')
					.out('-clone')
					.out('0')
					.out('-background', 'white')
					.out('-resize', '1510x940')
					.out('-borderColor', 'white')
					.out('-border', 5)
					.out(')')
					
					.out('-delete', '0')
					.out('-gravity', 'center')
					.out('-compose', 'over')
					.out('-composite')
					.out('-extent', `${width}x${height}`)

					.write(dirSaveFile + outputFileName, (error) => {
						
						console.log(outputFileName,' Editado!! 👍')

						if (error) {
							return error
						}
					})
			}
			else {
				console.log(`${file} não é um tipo de arquivo de imagem aceitável (JPG, JPEG, PNG)`)
			}
		})

	})

}