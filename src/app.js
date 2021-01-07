import path from 'path';
import { creatingBackgroundWithBlurEffect } from './CreatingWallpaper'

// 📝 Passando os diretórios
const DIR_ORIGINAL_FILE = path.join(__dirname, '../public/img-original/');
const DIR_SAVE_FILE = path.join(__dirname, '../public/img-edited/');


creatingBackgroundWithBlurEffect(DIR_ORIGINAL_FILE, DIR_SAVE_FILE)
