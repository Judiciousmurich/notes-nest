
const Auth = ({ onLogin,  onLogout, user }) => {
    return (
      <div>
        {user ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <>
          </>
        )}
      </div>
    );
  };
  
  export default Auth;
  