*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#ffd6e7,#fff0f5);
    font-family:'Poppins',sans-serif;
}

.hero{
    width:90%;
    max-width:420px;
    padding:40px;
    text-align:center;
    background:rgba(255,255,255,.25);
    backdrop-filter:blur(15px);
    border-radius:25px;
    box-shadow:0 10px 30px rgba(0,0,0,.15);
}

h1{
    font-family:'Great Vibes',cursive;
    font-size:3rem;
    color:#ff2d75;
    margin:20px 0;
}

h2{
    color:#ff5c93;
}

p{
    color:#444;
    line-height:1.8;
    margin-bottom:25px;
}

button{
    padding:15px 35px;
    border:none;
    border-radius:50px;
    background:#ff4d88;
    color:white;
    font-size:18px;
    cursor:pointer;
    transition:.3s;
}

button:hover{
    transform:scale(1.05);
}
