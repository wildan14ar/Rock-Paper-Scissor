var sPlayer = 0;
var sCom = 0;

function komputer() {
    const pc = Math.round(Math.random() * 3 + 1);
    if (pc == 1) return 'batu';
    if (pc == 2) return 'gunting';
    return 'kertas';
}

function getHasil(pc, player) {
    if (player == pc) return 'seri';
    if (player == 'batu') return (pc == 'gunting') ? 'menang' : 'kalah';
    if (player == 'gunting') return (pc == 'batu') ? 'kalah' : 'menang';
    if (player == 'kertas') return (pc == 'gunting') ? 'kalah' : 'menang';
}

function main() {
    const imgComputer = document.querySelector('.pc');
    const gambar = ['batu', 'kertas', 'gunting'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 500) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100)

}

function gbk(pilihanPlayer) {
    const pilihanComputer = komputer();
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    main();
    setTimeout(function () {
        document.querySelector('.pc').setAttribute('src', pilihanComputer + '.png');
        document.getElementById("info").innerHTML = hasil;
        if (hasil == "menang") {
            sPlayer++;
        }
        if (hasil == "kalah") {
            sCom++;
        }
        document.getElementById("s-player").innerHTML = "Score: " + sPlayer;
        document.getElementById("s-com").innerHTML = "Score: " + sCom;

    }, 500);
}