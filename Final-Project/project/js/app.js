// импорт React библиотеки
import React from 'react';
// импорт ReactDOM библиотеки
import ReactDOM from 'react-dom';
// импорт необходимых компонентов и стилей из react-router-dom и локальных файлов
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './css/style.css';

// компонент для страницы "About Us"
const AboutUs = () => <h1>About Us Page</h1>;
// компонент для страницы "Documents"
const Documents = () => <h1>Documents Page</h1>;
// компонент для страницы "Gallery"
const Gallery = () => <h1>Gallery Page</h1>;

// основной компонент приложения
function App() {
    return (
        // настройка маршрутизации с использованием BrowserRouter
        <BrowserRouter>
            {/* компонент навигационной панели */}
            <Navbar />
            {/* маршруты для различных страниц */}
            <Route path="/about_us" component={AboutUs} />
            <Route path="/documents" component={Documents} />
            <Route path="/gallery" component={Gallery} />
        </BrowserRouter>
    );
}

// рендеринг основного компонента в DOM элемент с id 'root'
ReactDOM.render(<App />, document.getElementById('root'));
