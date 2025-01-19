export const role = function(chat){
    let res;
    if (chat <= 2) {
        res = "Baru Kenal";
    } else if (chat <= 4) {
        res = "Sahabat Sejati";
    } else if (chat <= 5) {
        res = "Pacar";
    } else {
        res = "🎀Soulmate🦋"
    }
    return res;
}

