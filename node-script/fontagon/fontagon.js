// react-script/fontagon/fontagon.js

// Используем 'fs/promises' для современного асинхронного синтаксиса
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Fontagon from 'fontagon'
import { glob } from 'glob'

// Правильное определение __dirname в ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Путь к корневой папке проекта (выходим из react-script/fontagon)
// Проверяем разные возможные варианты структуры проекта
let projectRoot = path.resolve(__dirname, '..', '..')

// Проверяем существование папки assets
const assetsPath = path.join(projectRoot, 'assets')
const iconsPath = path.join(projectRoot, 'assets', 'icons')

// Если папки assets нет, возможно проект имеет другую структуру
// Проверяем альтернативные пути
const alternativePaths = [
    path.resolve(__dirname, '..', '..', 'src', 'assets', 'icons'),
    path.resolve(__dirname, '..', '..', 'src', 'icons'),
    path.resolve(__dirname, '..', '..', 'public', 'icons'),
]

const paths = {
    // Входные SVG файлы (будет определен динамически)
    files: '',
    // Куда будет сгенерирован шрифт
    dist: path.join(projectRoot, 'public', 'fonts', 'webfont-icons'),
    // Файл страницы-документации, который мы будем перезаписывать
    reactPage: path.join(projectRoot, 'src', 'pages', 'dev', 'icons.jsx'),
    // Добавляем путь к нашему кастомному шаблону CSS
    customCssTemplate: path.join(__dirname, 'templates', 'css.hbs'),
}

/**
 * Проверяет существование директории и возвращает путь к SVG файлам
 * @returns {Promise<string>} - Путь к SVG файлам
 */
async function findSvgPath() {
    // Проверяем основной путь
    try {
        await fs.access(iconsPath)
        console.log(`Found icons at: ${iconsPath}`)
        return path.join(iconsPath, '*.svg')
    } catch (error) {
        console.log(`Main path not found: ${iconsPath}`)
    }

    // Проверяем альтернативные пути
    for (const altPath of alternativePaths) {
        try {
            await fs.access(altPath)
            console.log(`Found icons at alternative path: ${altPath}`)
            return path.join(altPath, '*.svg')
        } catch (error) {
            // Путь не существует, продолжаем поиск
        }
    }

    // Если ничего не найдено, возвращаем основной путь (будет ошибка позже)
    console.warn('No icons directory found! Please create one at:')
    console.warn(`  - ${iconsPath}`)
    for (const altPath of alternativePaths) {
        console.warn(`  - ${altPath}`)
    }
    return path.join(iconsPath, '*.svg')
}

/**
 * Извлекает имена иконок из SVG файлов
 * @returns {Promise<string[]>} - Массив с именами иконок
 */
async function getIconNamesFromFiles(svgPattern) {
    try {
        const svgFiles = await glob(svgPattern)

        if (!svgFiles || svgFiles.length === 0) {
            console.warn(`No SVG files found in pattern: ${svgPattern}`)
            return []
        }

        return svgFiles.map((filePath) => {
            const fileName = path.basename(filePath, '.svg')
            return fileName
        })
    } catch (error) {
        console.error('Error reading SVG files:', error)
        return []
    }
}

/**
 * Генерирует содержимое для .jsx файла на основе списка имен иконок
 * @param {string[]} iconNames - Массив с именами иконок, например ['chevron', 'user']
 * @returns {string} - Полное содержимое .jsx файла в виде строки
 */
function generateReactComponentContent(iconNames) {
    // Генерируем блок с иконками
    const iconElements = iconNames
        .map(
            (name) => `
            <div className="icon-card" key="${name}">
                <i className="icon icon-${name}"></i>
                <span className="icon-name">${name}</span>
            </div>`,
        )
        .join('')

    // Возвращаем полный шаблон файла
    return `/* 
  ВНИМАНИЕ! Этот файл генерируется автоматически.
  Не редактируйте его вручную, все изменения будут потеряны.
  Для добавления иконок используйте команду 'npm run generate-icons'.
*/
import React from 'react'
import '../../../public/fonts/webfont-icons/icons.css'

// Страница для демонстрации всех иконок проекта
const IconsPage = () => {
    return (
        <div className="dev-icons-page">
            <h1>Сгенерированные иконки (${iconNames.length} шт.)</h1>
            <div className="icons-grid">
                ${iconElements}
            </div>
        </div>
    )
}

export default IconsPage

<style jsx>{\`
  .dev-icons-page {
    padding: 2rem;
  }

  .icons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .icon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 32px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      border-color: #007bff;
    }
  }

  .icon-name {
    font-size: 12px;
    font-family: monospace;
    word-break: break-all;
    color: #666;
  }
\`}</style>
`
}

/**
 * Создает директорию рекурсивно, если она не существует
 */
async function ensureDirectoryExists(dirPath) {
    try {
        await fs.access(dirPath)
    } catch (error) {
        console.log(`Creating directory: ${dirPath}`)
        await fs.mkdir(dirPath, { recursive: true })
    }
}

// Основная логика
async function run() {
    try {
        console.log('Starting icon font generation...')
        console.log('Current __dirname:', __dirname)
        console.log('Project root:', projectRoot)

        // Находим путь к SVG файлам
        const svgPattern = await findSvgPath()
        paths.files = svgPattern

        // Получаем имена иконок из файлов ДО генерации шрифта
        const iconNames = await getIconNamesFromFiles(paths.files)

        if (iconNames.length === 0) {
            console.error(`❌ No SVG files found!`)
            console.error(`   Expected pattern: ${paths.files}`)
            console.error(
                '\n📁 Please create an "icons" folder with SVG files in one of these locations:',
            )
            console.error(`   - ${iconsPath}`)
            for (const altPath of alternativePaths) {
                console.error(`   - ${altPath}`)
            }
            return
        }

        console.log(`✅ Found ${iconNames.length} icons:`, iconNames)

        // Создаем директорию для выходных файлов
        await ensureDirectoryExists(paths.dist)

        // Генерируем шрифт
        console.log('Generating font files...')
        await Fontagon({
            files: [paths.files],
            dist: paths.dist,
            fontName: 'icons',
            style: 'css',
            classOptions: {
                baseClass: 'icon',
                classPrefix: 'icon',
            },
            styleTemplate: {
                css: paths.customCssTemplate,
            },
        })

        console.log(`✅ Font generated successfully in ${paths.dist}`)

        // Создаем директорию для React страницы
        const pageDir = path.dirname(paths.reactPage)
        await ensureDirectoryExists(pageDir)

        // Генерируем React страницу с иконками
        console.log(`Generating React page with ${iconNames.length} icons...`)
        const componentContent = generateReactComponentContent(iconNames)
        await fs.writeFile(paths.reactPage, componentContent, 'utf-8')

        console.log(`✅ Successfully updated page at ${paths.reactPage}`)
        console.log('🎉 All done!')
    } catch (err) {
        console.error('❌ Failed during script execution!', err)
        console.error('Error details:', err.message)
        if (err.stack) {
            console.error('Stack trace:', err.stack)
        }
    }
}

// Запускаем скрипт
run()
