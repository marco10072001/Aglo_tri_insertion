function triInsertion(arr) {
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        var cle = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > cle) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = cle;
    }
    return arr;
}

// Exemple d'utilisation :
var tableau = [5, 2, 4, 6, 1, 3];
console.log("Tableau non trié :", tableau);
var tableauTrié = triInsertion(tableau);
console.log("Tableau trié :", tableauTrié);
