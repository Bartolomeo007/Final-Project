// импорт хука useState из библиотеки React
const { useState } = React;

// компонент формы регистрации с пропсом onRegister
function RegistrationForm({ onRegister }) {
    // состояния для хранения значения username и password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // обработчики изменения значения username и password
    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    // обработчик отправки формы, вызывает onRegister с данными пользователя
    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister({ username, password });
    };

    // визуальное представление формы регистрации
    return (
        <div className="container" style={{ textAlign: 'center', marginTop: '30px' }}>
            <form className="registration-form" onSubmit={handleSubmit}>
                <h1>Registration</h1>
                {/* поле ввода для username */}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required value={username} onChange={handleUsernameChange} />
                </div>
                {/* поле ввода для password */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required value={password} onChange={handlePasswordChange} />
                </div>
                {/* кнопка отправки формы */}
                <button type="submit">Registration</button>
                {/* ссылка для перехода к форме входа */}
                <p style={{ color: '#1a0d0d' }}>Already registered? <a href="login.html">Log in</a></p>
            </form>
        </div>
    );
}

// функция для регистрации пользователя, сохранение данных в localStorage и переход на страницу входа
function registerUser(userData) {
    localStorage.setItem('registeredUser', JSON.stringify(userData));
    window.location.href = "login.html";
}

// рендеринг компонента RegistrationForm в корневой элемент с идентификатором 'root'
ReactDOM.render(<RegistrationForm onRegister={registerUser} />, document.getElementById('root'));
