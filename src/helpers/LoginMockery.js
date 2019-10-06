/**
 * Login Mockery Class
 * 
 * A little class to help me mock up an AJAX Login process with an imaginary
 * back end. I guess I could have used express and node to do this, but if
 * you're reading this comment, that's great. 
 * 
 * I could probably have figured out how to get `yarn start` to run both
 * the react app, and a little express server to host a real fake back end
 * but... I figured that was not the key point here.
 * 
 * Thanks for reading! Hire me?
 * 
 */
class LoginMockery {

    correctUsername = "Example User";

    correctPassword = "L3tU$1nP13azE";

    mockBackendDelay = 5000;

    mockLogin(formData) {
        return new Promise((resolve, reject) => {
            if (formData.username === this.correctUsername && formData.password === this.correctPassword) {
                setTimeout(resolve, this.mockBackendDelay);
                return true;
            }
            const inputMessages = {};
            if (formData.username !== this.correctUsername) {
                inputMessages.username = "User Name not found.";
            }
            if (formData.password !== this.correctPassword) {
                inputMessages.password = "Password did not match.";
            }
            // eslint-disable-next-line prefer-promise-reject-errors
            setTimeout(() => reject({
                message: 'Login details were incorrect',
                input: inputMessages,
            }), this.mockBackendDelay);
        });
    }
}

export default LoginMockery;