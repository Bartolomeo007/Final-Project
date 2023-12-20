// импорт хука useState из React
const { useState } = React;

// компонент RegistrationForm для регистрации пользователя
function RegistrationForm({ onRegister }) {
    // состояние для имени пользователя и пароля
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // обработчики событий для изменения ввода
    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    // обработчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister({ username, password });
    };

    // JSX структура формы регистрации
    return (
        <div>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Имя пользователя</label>
                <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required />

                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />

                <button type="submit">Регистрация</button>
            </form>
            <p>Уже зарегистрированы? <a href="login.html">Войти</a></p>
        </div>
    );
}

// компонент Login для входа пользователя
function Login() {
    // состояние для имени пользователя и пароля
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // обработчики событий для изменения ввода
    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    // обработчик отправки формы (логика входа не реализована)
    const handleLogin = (event) => {
        event.preventDefault();
        // здесь можно реализовать логику входа
    };

    // JSX структура формы входа
    return (
        <div>
            <h1>Вход</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Имя пользователя</label>
                <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required />

                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />

                <button type="submit">Вход</button>
            </form>
            <p>Войти как гость: <a href="index.html" style={{ color: 'red' }}>Войти как гость</a></p>
        </div>
    );
}

function App() {
    // обработчик формы регистрации
    const handleRegister = (userData) => {
        console.log("Зарегистрированный пользователь:", userData);
    };

    return (
        <div>
            {}
            <RegistrationForm onRegister={handleRegister} />
            {}
        </div>
    );
}

// рендеринг компонента App в элемент 'root' в HTML
ReactDOM.render(<App />, document.getElementById('root'));
