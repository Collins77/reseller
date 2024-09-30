// import React from 'react'

const AdminLogin = () => {
  return (
    <div>
        <form >
            <div>
                <label htmlFor="">Email Address</label>
                <input type="email" placeholder="email address" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="*********" />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
  )
}

export default AdminLogin