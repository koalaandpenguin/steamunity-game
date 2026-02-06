const state = {
    character: null, money: 50, happiness: 50, familyTrust: 30, communityTrust: 0,
    choices: [], oldFriendsFlag: false, metBreakthrough: false
};
const characters = {
    lina: { name: "Lina", bio: "Recovering from addiction. Has a 3-year-old son.", money: 50, happy: 40, trust: 25 },
    marcus: { name: "Marcus", bio: "Former secret society member seeking purpose.", money: 80, happy: 45, trust: 20 },
    sara: { name: "Sara", bio: "First-time offender. Family is willing to help.", money: 100, happy: 55, trust: 40 }
};
function updateStats() {
    document.getElementById('money-stat').textContent = `$${state.money}`;
    document.getElementById('happiness-stat').textContent = `${state.happiness}%`;
    document.getElementById('family-stat').textContent = `${state.familyTrust}%`;
    document.getElementById('community-stat').textContent = `${state.communityTrust}%`;
}
function showScene(html) {
    document.getElementById('game-content').innerHTML = `<div class="scene">${html}</div>`;
}
function intro() {
    showScene(`
        <h2 class="scene-title">Day 1: Changi Gates</h2>
        <div class="scene-illustration illustration-prison"></div>
        <p>The gates close behind you. You are free. But where will you go?</p>
        <button class="continue-btn" onclick="chooseCharacter()">Start</button>
    `);
}
function chooseCharacter() {
    showScene(`
        <h2 class="scene-title">Select Persona</h2>
        <div class="character-card" onclick="select('lina')"><div class="character-portrait portrait-lina"></div><div><h3>Lina</h3><p>${characters.lina.bio}</p></div></div>
        <div class="character-card" onclick="select('marcus')"><div class="character-portrait portrait-marcus"></div><div><h3>Marcus</h3><p>${characters.marcus.bio}</p></div></div>
        <div class="character-card" onclick="select('sara')"><div class="character-portrait portrait-sara"></div><div><h3>Sara</h3><p>${characters.sara.bio}</p></div></div>
    `);
}
function select(key) {
    const c = characters[key];
    state.character = key; state.money = c.money; state.happiness = c.happy; state.familyTrust = c.trust;
    updateStats(); housing();
}
function housing() {
    showScene(`
        <h2 class="scene-title">Housing</h2>
        <button class="choice-btn" onclick="act(1)">Stay with Family (Free but tense)</button>
        <button class="choice-btn" onclick="act(2)">Halfway House ($15/night)</button>
    `);
}
function act(choice) {
    if(choice === 1) { state.familyTrust += 10; state.happiness -= 10; }
    else { state.money -= 15; state.communityTrust += 10; }
    updateStats(); breakthrough();
}
function breakthrough() {
    showScene(`
        <h2 class="scene-title">Breakthrough Café</h2>
        <div class="scene-illustration illustration-cafe"></div>
        <p>You see a cafe run by ex-offenders. Inside, everyone shares their life stories. You see the cage of your past starting to open.</p>
        <button class="choice-btn" onclick="cafe(true)">Enter and join them</button>
        <button class="choice-btn" onclick="cafe(false)">Keep walking</button>
    `);
}
function cafe(joined) {
    if(joined) { state.happiness += 25; state.communityTrust += 20; state.metBreakthrough = true; }
    updateStats(); friends();
}
function friends() {
    showScene(`
        <h2 class="scene-title">Old Connections</h2>
        <p>Your old friends call. "Eh, come KTV. We got a lobang for easy money."</p>
        <button class="choice-btn" onclick="end(true)">Block and ignore them</button>
        <button class="choice-btn" onclick="end(false)">Meet them for one drink</button>
    `);
}
function end(blocked) {
    if(blocked) { state.happiness += 15; state.communityTrust += 10; }
    else { state.oldFriendsFlag = true; state.happiness -= 30; }
    updateStats();
    if(state.metBreakthrough && blocked) {
        showScene(`<h2 class="scene-title">Happy Route: Thriving</h2><p>By joining Breakthrough and cutting off bad friends, you found a new family. You are truly free.</p><button class="continue-btn" onclick="location.reload()">Restart</button>`);
    } else {
        showScene(`<h2 class="scene-title">The Cycle Continues</h2><p>Without support and with bad influences, the road back to the cage is short.</p><button class="continue-btn" onclick="location.reload()">Restart</button>`);
    }
}
intro();
