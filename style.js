*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;

    background:linear-gradient(
        -45deg,
        #ffffff,
        #dff6ff,
        #87ceeb,
        #bdefff
    );

    background-size:400% 400%;

    animation:bgMove 12s ease infinite;

    padding:30px;
}

@keyframes bgMove{
    0%{
        background-position:0% 50%;
    }
    50%{
        background-position:100% 50%;
    }
    100%{
        background-position:0% 50%;
    }
}

.container{
    max-width:1200px;
    margin:auto;
}

.header{
    text-align:center;
    margin-bottom:30px;
}

.header h1{
    color:#005b96;
    font-size:42px;
}

.header p{
    color:#444;
    font-size:18px;
}

.dashboard{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:25px;
}

.card{
    background:rgba(255,255,255,0.7);

    backdrop-filter:blur(12px);

    border-radius:25px;

    padding:25px;

    box-shadow:
    0 8px 20px rgba(0,0,0,0.15);

    transition:0.4s;
}

.card:hover{
    transform:translateY(-8px);
}

.card h2{
    color:#0077b6;
    margin-bottom:15px;
}

.big-number{
    font-size:60px;
    font-weight:bold;
    text-align:center;
    color:#005b96;
}

.status{
    text-align:center;
    font-size:28px;
    font-weight:bold;
    padding:15px;
    border-radius:15px;
}

.minimum{
    background:#d6f0ff;
    color:#0077b6;
}

.normal{
    background:#d8ffd8;
    color:#28a745;
}

.overcrowded{
    background:#ffd6d6;
    color:#e63946;
}

.bus-layout{
    display:grid;
    grid-template-columns:repeat(2,90px);
    justify-content:center;
    gap:20px;
    margin-top:20px;
}

.seat{
    width:90px;
    height:90px;

    border-radius:20px;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:24px;
    font-weight:bold;

    color:white;

    background:#2ecc71;

    box-shadow:
    0 0 15px rgba(46,204,113,.6);

    transition:0.3s;
}

.seat:hover{
    transform:scale(1.08);
}

.occupied{
    background:#e63946;

    box-shadow:
    0 0 18px rgba(230,57,70,.8);
}

.footer{
    text-align:center;
    margin-top:30px;
    color:#444;
}
