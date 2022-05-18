// Soal: 
// Seorang Coder diminta untuk mensolve suatu baris deret bilangan  
// deret bilangan tersebut adalah 0,1,1,2,3,5,8,13,21,......
// dari pola yang ada buatlah fungsi yang dapat menampilkan deret bilangan hingga 20 bilangan
// clue: menggunakan perulangan
// Tidak boleh langsung print expected output

// Jawaban:
// write your code here
function deretBilangan(){
    let array = [];
    for (let i = 0; i <= 19 ; i++){
        if (i < 2){
            array.push(i)
        }
        if (i >= 2){
            array.push(array[i - 2] + array[i - 1])}{
        }
    }
    return array
}
console.log(deretBilangan())