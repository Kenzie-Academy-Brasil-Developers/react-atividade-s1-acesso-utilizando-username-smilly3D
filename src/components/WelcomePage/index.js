const WelcomePage = ({ user, setIsLoggedIn }) => {
  const HandleLogout = () => {
    return setIsLoggedIn(false);
  };
  return (
    <>
      <h2>Bem-vindo, {user}</h2>
      <button onClick={() => HandleLogout()}>
        <span> Sair</span>
      </button>
    </>
  );
};

export default WelcomePage;
