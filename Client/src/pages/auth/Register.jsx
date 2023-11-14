
const Auth = ({ onRegister, onLogout, user }) => {
    return (
      <div>
        {user ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <>
            <button onClick={onRegister}>Register</button>
          </>
        )}
      </div>
    );
  };
  
  export default Auth;
  