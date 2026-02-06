* { margin: 0; padding: 0; box-sizing: border-box; }
:root {
    --primary-dark: #1a1a1a; --primary-medium: #2d2d2d;
    --accent-warm: #d4a574; --accent-cool: #7a9cb5;
    --text-light: #f5f5f5; --text-muted: #9a9a9a;
    --danger: #c85a54; --success: #6b9080; --warning: #e8b44a;
}
body {
    font-family: 'Work Sans', sans-serif;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    color: var(--text-light); min-height: 100vh;
    display: flex; justify-content: center; align-items: center; padding: 20px;
}
.game-container { max-width: 950px; width: 100%; background: rgba(45, 45, 45, 0.95); border-radius: 16px; overflow: hidden; }
.header { background: linear-gradient(135deg, var(--accent-warm) 0%, var(--accent-cool) 100%); padding: 40px; text-align: center; }
h1 { font-family: 'Crimson Pro', serif; font-size: 2.8rem; color: var(--primary-dark); }
.stats-bar { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 15px; padding: 25px; background: rgba(26, 26, 26, 0.5); }
.stat-value { font-size: 1.6rem; font-weight: 600; }
.content { padding: 50px 40px; }
.scene-title { font-family: 'Crimson Pro', serif; font-size: 2rem; color: var(--accent-warm); border-left: 4px solid var(--accent-warm); padding-left: 20px; margin-bottom: 30px; }
.character-card { background: rgba(212, 165, 116, 0.1); padding: 20px; border-radius: 12px; margin: 15px 0; border: 2px solid var(--accent-warm); cursor: pointer; display: flex; gap: 20px; align-items: center; }
.character-portrait { width: 80px; height: 80px; border-radius: 50%; }
.portrait-lina { background: linear-gradient(#8B4789, #E8A5D0); }
.portrait-marcus { background: linear-gradient(#2C5F7C, #7AB8D9); }
.portrait-sara { background: linear-gradient(#D4A574, #F5E1CC); }
.scene-illustration { width: 100%; height: 180px; border-radius: 10px; margin: 20px 0; }
.illustration-prison { background: #4a5568; }
.illustration-cafe { background: #8B7355; position: relative; }
.illustration-cafe::after { content: '☕'; font-size: 3rem; position: absolute; top: 35%; left: 45%; }
.choice-btn { display: block; width: 100%; padding: 15px; margin-bottom: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--accent-warm); color: white; border-radius: 5px; cursor: pointer; text-align: left; }
.choice-btn:hover { background: var(--accent-warm); color: black; }
.continue-btn { padding: 12px 30px; background: var(--accent-warm); border: none; border-radius: 5px; cursor: pointer; font-weight: bold; }
