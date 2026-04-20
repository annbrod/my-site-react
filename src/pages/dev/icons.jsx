/* 
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
            <h1>Сгенерированные иконки (7 шт.)</h1>
            <div className="icons-grid">
                
            <div className="icon-card" key="write">
                <i className="icon icon-write"></i>
                <span className="icon-name">write</span>
            </div>
            <div className="icon-card" key="notebook">
                <i className="icon icon-notebook"></i>
                <span className="icon-name">notebook</span>
            </div>
            <div className="icon-card" key="message">
                <i className="icon icon-message"></i>
                <span className="icon-name">message</span>
            </div>
            <div className="icon-card" key="learn">
                <i className="icon icon-learn"></i>
                <span className="icon-name">learn</span>
            </div>
            <div className="icon-card" key="close">
                <i className="icon icon-close"></i>
                <span className="icon-name">close</span>
            </div>
            <div className="icon-card" key="burger">
                <i className="icon icon-burger"></i>
                <span className="icon-name">burger</span>
            </div>
            <div className="icon-card" key="books">
                <i className="icon icon-books"></i>
                <span className="icon-name">books</span>
            </div>
            </div>
        </div>
    )
}

export default IconsPage

<style jsx>{`
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
`}</style>
