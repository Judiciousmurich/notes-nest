
const Auth = ({ onLogin,  }) => {
    return (
      <div>
        {user ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <>
            <button onClick={onLogin}>Login</button>
          </>
        )}
      </div>
    );
  };
  
  export default Auth;
  