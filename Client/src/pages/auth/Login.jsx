
const Auth = ({ onLogin,  onLogout, user }) => {
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
  