let nama ="dimas"

let jumlahVokal = 0
let jumlahKonsonan = 0

for (let i=0; i < nama.length; i++){
    if("aiueoAIUEO".includes(nama[i])){
        jumlahVokal +=1;
    }else{
        jumlahKonsonan +=1;
    }
}
console.log(`jumlah vokal : ${jumlahVokal}
jumlah konsonan : ${jumlahKonsonan}`);