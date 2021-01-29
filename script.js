


document.getElementById("hitung").addEventListener('click', function() {
    const income = Number(document.getElementById('gaji').value)
    const insurance = Number(document.getElementById('asuransi').value)
    const rent = Number(document.getElementById('sewa').value)
    const others = Number(document.getElementById('lain-lain').value)

    const hasilAkhir = document.getElementById("rekomendasi")


    const totalExpense = income - (insurance + rent + others)
    document.getElementById('result').value = totalExpense

    if (totalExpense < 0) {
        hasilAkhir.innerHTML = 'You spending is beyond your income. Please manage it more'
    } else {
        hasilAkhir.innerHTML = `You have around Rp. ${totalExpense} this month`
    }
})


